import json
from django.views import View
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ..forms import FileFieldForm
from django.utils.decorators import method_decorator
from compress import PDFCompression
from compress.main import GenericFileType
from typing import List, Union
import io
import zipfile
import asyncio
import time
from asgiref.sync import sync_to_async

@method_decorator(csrf_exempt, name='dispatch')
class CompressView(View):
    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)
    
    async def compress_file(
        self, 
        file, 
        compress_intance: PDFCompression, 
        zip_file: zipfile.ZipExtFile,
        quality: int
        ) -> None:
        try:
            pdf_stream = await compress_intance.build(file=file.read(), quality=quality, name=file.name)
            print('PDF_COMPRESSED: ', pdf_stream)
            self.files_compressed.append(pdf_stream)
            zip_file.writestr(f"{file.name}.pdf", pdf_stream.getvalue())

        except Exception as e:
            print(e)        


    async def get(self, request):
        return HttpResponse('get no compress')
    
    async def post(self, request):
        tempo1 = time.time()
        print('TIMEE', tempo1)
        form = FileFieldForm(request.POST, request.FILES)
        if form.is_valid():
            qualitys: List[int] = request.POST.getlist('quality')
            files = form.cleaned_data['file']
            corroutines: List[asyncio.Task] = []
            self.files_compressed: List[io.BytesIO] = []
            with PDFCompression() as compress:
                zip_buffer = io.BytesIO()
                with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
                    for i, f in enumerate(files):
                        quality = int(qualitys[i])
                        print('arquivo', f, 'qualidade', quality, type(quality))
                        corroutines.append(
                            asyncio.create_task(self.compress_file(f, compress, zip_file, quality=quality))
                        )
                    await asyncio.gather(*corroutines)
            zip_buffer.seek(0)
            response = HttpResponse(zip_buffer, content_type='application/zip')
            response['Content-Disposition'] = 'attachment; filename="files_compressed.zip"'    
            tempo2 = time.time()
            print('RESULT ASYNC', tempo2-tempo1)
            return response
        
        return HttpResponse(f'error: {form.errors}')
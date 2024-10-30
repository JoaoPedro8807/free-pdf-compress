import aspose.words as aw
from typing import Any, List, Union, TypedDict
import os
from pathlib import Path
from compress import Compress
from .validation_data import ValidationData

class GenericFileType(TypedDict):
    file_name: str
    file_path: str
    file_size: int



class PDFCompression(ValidationData, Compress):
    def __init__(self, pdf_dir:str = '') -> None:
        self.pdf_dir: Path = Path(pdf_dir) if pdf_dir else Path()
        self.files_to_process: List[Path] = []
        self.comparative: List[tuple] = [] 
        self.files_to_process = []
        
    def __str__(self) -> str:
        return  f'PDFCompression working with directory {self.pdf_dir}'

    @property
    def files(self):
        return self.files_to_process

    @files.setter
    def files(self, files: list[Path]):
        self.files_to_process = files

    @property
    def get_compartives(self):
        """ return files sizes compartives before and after """
        result = []
        for build in self.comparative:
            total = build[1] 
            dif = build[1] - build[2]
            perct = round((dif * 100) / total , 3)
            result.append(f'O arquivo {build[0]} foi de {build[1]} kb para {build[2]} kb, redução de {perct}%')
        return result
    
    async def build(self, 
            file: bytes,
            quality: int,
            name: str = '',
            max_width: int = 1500, 
            max_heigth: int = 1500,
    
            ) -> bytes:
        """ 
            Build all pdfs files (only pdf files) at the path                                           

        Parameters:
        file_dir (Path or str, required): The path to the PDFs files to compress.
        quality_per_image (int, required): The quality level for the compression (0-100).
        name (str, optional): The name of the output file,  will be save with the int increment in the end of name ex: (teste-1.pdf)
        dir_to_save (Path, or, required): The directory where the output file will be saved.
        max_width (int, optional): The maximum width for the output PDF pages. Default is 1500.
        max_height (int, optional): The maximum height for the output PDF pages. Default is 1500.

        """
  
        #get only pdfs files
        self.files_to_process.append(file if name.endswith('.pdf') else None)

        self.init_validate(
            quality=quality, 
            file=file)
            
        name = name or file.name
        if not name.endswith('.pdf'): 
            name += '.pdf'  # make sure the file will save .pdf
            
        return await self.compact(
            file=file, 
            max_width=max_width, 
            max_height=max_heigth, 
            quality=quality
            )
        


    def init_validate(self, *args, **kwargs) -> None:
        self.validate_data(*args, **kwargs)

    def __repr__(self) -> str:
        return f'PDFCompression(pdf_dir={self.pdf_dir})'
    
    def __len__(self) -> int:
        return len(self.files_to_process)
    
    def __enter__(self):
        print(f'PDFCompression inicializado com sucesso!')
        return self
    
    def __exit__(self, exec_type, exec_value, traceback):
        if exec_type:
            print(f'error: {exec_value}')
        else:
            print(f'Compressão concluida com sucesso, {len(self.files_to_process)} de arquivos processados')    






            
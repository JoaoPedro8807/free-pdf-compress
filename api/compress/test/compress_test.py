from main import PDFCompression
import pytest
from pathlib import Path
from typing import Type
import shutil

class TestClass:
    @pytest.fixture(autouse=True)
    def setup(self) -> None:
        self.pdfs_path = Path(__file__).parent.parent / 'pdfs'
        self.pdf_compressor = PDFCompression(pdf_dir=self.pdfs_path)
        self.dir_to_save = Path(__file__).parent / 'compress-pdf'
        self.dir_to_save_queue = self.dir_to_save / 'queue'

    @pytest.fixture(autouse=True)
    def cleanup(self):
        yield  #tests will be run here
        #after runnig, clean dir (if dir_to_save are set) 
        if self.dir_to_save.exists(): #
            shutil.rmtree(self.dir_to_save) 

    def make_compress_queue(self, files_dir: Path | str, name: str = '') -> None:
        """ make the queue compact with files params, and save at default test.queue_path """
        self.pdf_compressor.build_all(
            files_dir=files_dir,
            quality_per_image=30,
            dir_to_save=self.dir_to_save_queue,
            name=name,
            max_heigth=1000,
            max_width=1000
        )

    def count_files_instance(self) -> int:
        return sum(1 for file in self.pdfs_path.iterdir() if file.name.endswith('.pdf') )

    def test_test(self):
        assert 1 == 1

    def test_initialization(self):
        self.pdf_compressor.build(
            file = self.pdfs_path / 'teste.pdf',
            quality=30,
            name='rodandotest-pytest',
            dir_to_save=self.dir_to_save,
            max_width=1500,
            max_heigth=1500
        )
        assert self.pdf_compressor.files

    def teste_queue_compress(self):
        qntd_files =  self.count_files_instance()

        self.make_compress_queue(self.pdfs_path, name='teste_queue') 

        compressor_files = len(self.pdf_compressor.files)
        assert compressor_files == qntd_files

    def test_queue_save_with_namespace(self):
        test_name = 'teste-name-queue'
        self.make_compress_queue(
            self.pdfs_path,
            test_name,
        )
        files_compreeseds = self.dir_to_save_queue.iterdir()
        for file in files_compreeseds:
            assert file.name == test_name + '.pdf'



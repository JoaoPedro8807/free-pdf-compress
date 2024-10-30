from  pathlib import Path

class ValidationData:
    def __init__(self, *args, **kwargs) -> None:
        ...

    def validate_data(self, *args, **kwargs) -> None:
        self.data = kwargs
        self.errors = []
        self.validate_file()
        self.validate_quality()
        if self.errors:
            raise ValueError(f"Erros de validação: {self.errors}")

    def validate_file(self):
        """ check all files existing """
        file = self.data.get('file')
        # if not Path(file).is_file():
        #     self.errors.append(f"O arquivo {file} não existe.")
            
    def validate_quality(self):
        quality = self.data.get('quality')
        if quality and quality not in range(1, 101):
            self.errors.append('A qualidade precisa estar entre 1 e 100.')

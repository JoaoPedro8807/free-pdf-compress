import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface IFileList{
    file: File
    quality: number,
    name: string
    size: number
  }

interface IFileContext{
    fileList: IFileList[],
    addFiles: (files: File[]) => void
    removeFile: (index: number) => void
    editFileQuality:  (index: number, quality: number) => void
}

const FileContext = createContext<IFileContext | undefined>(undefined);

export const FileContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [fileList, setFileList] = useState<IFileList[]>([]);
    
    const addFiles = (files: File[]): void => {
      const newFiles: IFileList[] = Array.from(files).map(file => ({
        file,
        name: file.name,
        quality: 50, //default quality value
        size: file.size,
      }));
      setFileList(prevFiles => [...prevFiles, ...newFiles]);
    };
  

    const removeFile = (index: number): void => {
      setFileList(prevFiles => prevFiles.filter((_, i) => i !== index)); 
    };

    const editFileQuality = (index: number, quality: number): void => {
            setFileList(prevFiles => {
                return prevFiles.map(( file, i ) => {
                    if(index === i){
                        console.log('EDITANDO O ARQUIVO', i, 'com quality', quality)
                        console.log('FINAL EDITADOP: ', {...file,
                            quality})
                        return{
                            ...file,
                            quality
                        } 
                    }
                    return file
                })
            } )
        }


    return (
      <FileContext.Provider value={{ fileList, addFiles, removeFile, editFileQuality }}>
        {children}
      </FileContext.Provider>
    );
  };
  
  export const useFileContext = () => {
    const context = useContext(FileContext);
    if (!context) {
      throw new Error('Ocorreu um erro ao providenciar o Contexto do FileState');
    }
    return context;
  };



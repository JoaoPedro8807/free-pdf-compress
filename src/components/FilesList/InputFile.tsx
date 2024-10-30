import React from 'react'
import { TextStyled } from '../DefaultText.style'
import { useFileContext } from './FileProvider'

interface InputProps{
    children?: React.ReactNode
}


export default function InputFile( { children } :InputProps ) {
    const { addFiles  } = useFileContext()
    
    const handleFileOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files){
            addFiles(Array.from(files))
        }
  
    }
  return (
    <div className="container">
        <div className="folder">
        <div className="front-side">
            <div className="tip" />
            <div className="cover" />
        </div>
        <div className="back-side cover" />
        </div>
        
        <label className="custom-file-upload">
        <input 
            className="title" 
            type="file" 
            accept='.pdf' 
            onChange={handleFileOnChange}
            /> 
        <TextStyled text='Escolha um arquivo' />
        </label>
        {children}
  </div>
  )
}

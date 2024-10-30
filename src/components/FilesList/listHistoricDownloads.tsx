import React from 'react'
import { FileButton } from './fileButton'
import { DownloadIcon } from './downloadIcon'

interface ListHistoricDownloadsProps {
    url: string
    name?: string

}


export default function ListHistoricDownloads({ url, name = 'documento.zip' }: ListHistoricDownloadsProps) {
  return (  
    <ul style={{width: '100%', listStyle: 'none'}}>
        <li style={{width: '100%', padding: '10px'}}>
            <div style={{width: '100%'}}>       
                <FileButton text={name} >
                    <a href={url} download={name}>    
                    <DownloadIcon/>
                    </a>
                </FileButton>
            
            </div>
        </li>
    </ul>
  )
}

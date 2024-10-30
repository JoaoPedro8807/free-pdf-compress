import React from 'react'
import ListHistoricDownloads from './listHistoricDownloads'
import { zipCompressProps } from './ListFiles'

interface historicCompressProps {
    historicCompress: zipCompressProps[],
    children?: React.ReactNode
}

export default function HitoricCompress( { children, historicCompress }: historicCompressProps ) {
  return (
    <div>
        {historicCompress.length > 0 ? (
            historicCompress.map(({ downloadUrl: url, name }, index) => (
              // <div key={index}>
              //   <a href={url} download={`arquivo_${index + 1}.zip`}> 
              //     Baixar arquivo {index + 1}
              //   </a>
              // </div>
              <ListHistoricDownloads key={index} url={url} name={name}/>
            ))
          ) : (
            <p>Nenhum arquivo disponível para download.</p>
          )}
        {children}
    </div>
  )
}

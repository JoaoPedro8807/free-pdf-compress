import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { StyledFileContainer } from './FilesContainer.style';
import { UnorderdList, UnordedListItem } from './UnordedList.style';
import ButtonSubmit from './ButtonSubmit';
import Wrapper from '../Wrapper';
import { PostCompressFile } from '../../services/postCompress';
import { DownloadFileDialog } from './downloadFileDialog.style';
import { useFileContext } from './FileProvider';
import HitoricCompress from './historicCompress';
import { CloseBtn } from '../closeBtn';
import getZipFileNameWithDate from '../../utils/getFileNameByDate';
import { Loader } from '../Loader';
export interface zipCompressProps {
  downloadUrl: string
  name: string
}


export default function ListFiles() {
  const { fileList  } = useFileContext()
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [currentFileCompress, setCurrentFileCompress] = useState<string>('') // por ennquanto unknow, colocar o Ifilelist[] qq coisa
  const [historicCompress, setHistoricCompress] = useState<zipCompressProps[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);


  // const handleDialogOpen = () => {
  //   setIsDialogOpen(true)
  // }
  
  const handleDialogClose = () => {
    //setDownloadUrls([])
    console.log('FECHANDO DIALOG')
    setIsDialogOpen(false)
  }
  
  const PostFiles = async () => {
    setIsFetching(true)
    try{
      const data = await PostCompressFile('compress/',
        fileList,
        {
          headers:{
            "User-Agent": "teste"
          },
          responseType: 'blob' // pra retornar um arquivo em binário
        }
      )
      if(data){
        const downloadUrl = URL.createObjectURL(data); 
        const name = getZipFileNameWithDate()
        setHistoricCompress((prev) => [...prev, { downloadUrl, name }]); 
        setIsDialogOpen(true)
        setCurrentFileCompress(downloadUrl)
        //setFilesCompress((prev) => [...prev, data] )
      }
      console.log('RETORNO API DJANGO: ', data) 
 
    }catch(error){
      console.error(`Erro ao comprimir: ${error} `)
    }finally{
      setIsFetching(false)
    }
  }



  return (
  <Fragment>
    <Box 
    sx={{ 
      flexGrow: 1,  
      display: 'flex', 
      flexDirection:'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%' }}>
      <FormGroup row>
     
      </FormGroup>
      <Wrapper style={{paddingBottom: '50px'}} >
            <Wrapper style={{boxShadow: 'none'}}>
              <StyledFileContainer>
                <UnorderdList> 
                {fileList.length === 0 ? (
                  <p>Nenhum arquivo adicionado.</p>
                  ) : (
                fileList.map((file, i) => (
                  <UnordedListItem 
                  key={i} 
                  index={i}
                  file={file}
                  
                  />
                ))
              )}
                </UnorderdList> 
              </StyledFileContainer>
            </Wrapper>
          {fileList.length > 0 && (
            <ButtonSubmit onClick={PostFiles}  text='Enviar'/>
          )}
            
        </Wrapper>
      </Box>
      {isFetching && <Loader  />}
        <Box style={{width: '100%', overflow: 'hidden', marginTop: '100px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Typography style={{width: '100%', textAlign: 'center'}}  variant="h6">Arquivos Compactados para Download:</Typography>
          <HitoricCompress historicCompress={historicCompress}/> 

        <DownloadFileDialog 
          open={isDialogOpen} 
          onClose={handleDialogClose} 
          transitionDuration={800}  
          fullScreen={true}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
          >
          
            <Wrapper style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
                padding: '10px'
              }}
              >
              <Typography  style={{alignSelf: 'center'}} variant="h6" align='center'>Arquivos Compactados para Download:</Typography>
                <CloseBtn onClick={handleDialogClose} />
            </Wrapper>

            <Wrapper
              style={{  
                height: '80dvh',
              }}  
            >
              {
                currentFileCompress && (
                  <div>
                    <h1>Arquivo comprimido com sucesso!</h1>

                    <a href={currentFileCompress} download={getZipFileNameWithDate()}>
                    clique aqui para baixar {getZipFileNameWithDate()}
                    </a>
                  </div>
                )
              }
            </Wrapper>
        </DownloadFileDialog>
        </Box>

      
    </Fragment>

  );
}

import React, { Fragment } from 'react'
import { ContentSection } from './home.style'
import { StyledInputContainer } from '../../components/inputFile.style'
import ListFiles from '../../components/FilesList/ListFiles'
import Wrapper from '../../components/Wrapper'
import { FileContainer } from '../../components/InputContainer.style'
import InputFile from '../../components/FilesList/InputFile'
import { FileContextProvider } from '../../components/FilesList/FileProvider'

const Content: React.FC = () => {

  return (
    <Fragment > 
      <ContentSection>
        <FileContextProvider>
          <Wrapper >  
            <FileContainer>
              <StyledInputContainer>
                <InputFile>
                  
                </InputFile>
              </StyledInputContainer>
            </FileContainer>
          </Wrapper>

          <Wrapper>
            <ListFiles />
          </Wrapper>

      </FileContextProvider>
      </ContentSection>
    </Fragment>

  )
}     
export default Content
import React from 'react'
import { HomeCard } from './homeCard'
import Wrapper from '../../components/Wrapper'
import './home.css'
import { ColapseCard } from './colapseCard'
import { Typography } from '@mui/material'
import { useIntersectionObserver } from '../../hooks/useInterSectionObserver'
import IndexWrapper from './indexWrapper'
import { RedesContent } from './redesContet'
import { GetStartButton } from './getStartBtn'
export default function HomeIndex() {
  const elementsRef = useIntersectionObserver({threshold: 0}); // porcentagem de visibilidade pra ativar o intersect

  return (
    <IndexWrapper>
        <Wrapper style={{height: '100dvh', flexDirection: 'column', flexWrap: 'nowrap', boxShadow: 'none'}}>
        <h1> PDF-Compress </h1>
            <HomeCard 
            text='Você precisa comprimir muitos arquivos PDFs e não quer pagar para poder imprimir todos de uma vez? Então você irá adorar
            a o PDF-Compress. ' 
            title={'BEM-VINDO'}
            />
        </Wrapper>

        <div className='section-more-about hiddenCard' id='section-more-about' ref={element => element && elementsRef.current.push(element)} >
          <div className="container">
            <ColapseCard title='Sobre o Aplicativo' btnTitle='Funcionalidades'>
              <Typography variant="h6">Descrição do Aplicativo</Typography>
                    <Typography>
                        Este aplicativo permite você compactar seus arquivos PDFs em fila, sem pagar nada. Além disso, 
                        você pode colocar a porcentagem da qualidade do pdf, que ira influenciar no tamanho final do arquivo, ou seja,
                        uma qualidade menor, um arquivo mais leve. Isso os compactadores do Adobe e outros compactadores mais famosos não tem.
                    </Typography>
                    <Typography variant="h6" mt={2}>Funcionalidades</Typography>
                    <Typography>- Selecione varios arquivos ou apenas um para ser compactado.</Typography>
                    <Typography>- Escolha a qualidade de cada arquivo separadamente.</Typography>
                    <Typography>- Baixe o zip com os arquivos compactados.</Typography>
                    <GetStartButton />
            </ColapseCard>


            <ColapseCard title='Contato' btnTitle=''>
              <Typography variant="h6">Minhas redes sociais:</Typography>
                    
                    <RedesContent/>
            </ColapseCard>
          
            </div>
        </div>
    </IndexWrapper>
  )
}

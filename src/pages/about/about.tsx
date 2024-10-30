import React from 'react'
import styled from 'styled-components'

export const About = () => {
    return (
        <AboutWrapper>
            <div>
                Desenvolvido por <a href="https://github.com/JoaoPedro8807" target='_blank' rel='noopener noreferrer'><p>João Pedro</p></a>
            </div>
        </AboutWrapper>
    )
}


const AboutWrapper = styled.section`
    min-height: 100dvh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
`
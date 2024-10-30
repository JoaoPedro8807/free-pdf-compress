import React, { useContext } from 'react';
import { Container, ThemeContainer } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'
import { useTheme } from '../../App';
import { RxHalf2 } from "react-icons/rx";
import { TitleStyled } from '../Title.style';
export default function Header() {  
    const theme = useContext(ThemeContext)

    const { toggleTheme } = useTheme()  
    

  return (  
    <Container>
       <TitleStyled  title='PDF-Compress'/>
      <ThemeContainer>
        <RxHalf2 size={'20px'} />

        <Switch 
            onChange={toggleTheme}
            checked={theme?.title === 'dark'} // Corrigido aqui
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            handleDiameter={23}
            offColor='#360a2c'
            
            onColor={theme?.colors.secondary}
        />
      </ThemeContainer>
    </Container>
  );
}

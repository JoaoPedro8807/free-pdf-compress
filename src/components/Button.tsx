import React from 'react'
import { styled } from 'styled-components';

interface ButtonProps{
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  color?: string
  type?: 'button' | 'submit' | 'reset'; 
  text?: string
}

export default function Button( { children, onClick, type = 'button', text }: ButtonProps  ) {
  return (
      <StyledButton 
      onClick={onClick}
      type={type}
      >
      {text}
      {children}
        
    </StyledButton>
  )
}


const StyledButton = styled.button`
  padding: 0px;
  border: none;
  background: none;
  padding: 2px;
  border-radius: 10px;

  
  

`
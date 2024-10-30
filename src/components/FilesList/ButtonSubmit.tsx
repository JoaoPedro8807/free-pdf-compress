import styled from "styled-components";
import React, { ReactNode } from 'react'

interface ButtonProps{
    children?: ReactNode
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BtnSubmitStyled = styled.button`
width: 50%;
border: none;
border-radius: 15px;
padding: 15px;

`
export default function ButtonSubmit( { children, text, onClick }: ButtonProps ) {
  return (
    <BtnSubmitStyled onClick={onClick}>
        {text}
        {children}
    </BtnSubmitStyled>
  )
}

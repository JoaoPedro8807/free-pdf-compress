import React from 'react'
import styled from 'styled-components'

interface IndexContentProps {
    children?: React.ReactNode
    style?: React.CSSProperties
}
export default function IndexWrapper( { children, style }: IndexContentProps ) {
  return (
    <IndexWrapperStyled style={style}>
        {children}
    </IndexWrapperStyled>
  ) 
}

const IndexWrapperStyled = styled.section`
  width: 100%;
  height: 100%;
  padding: 0px 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) { 
    padding: 10px;
    flex-wrap: wrap;

    .example-2{
      flex-wrap: wrap;
      row-gap: 30px;

    }
    .example-2 .icon-content{
      margin-bottom: 30px;
    }
  }
`

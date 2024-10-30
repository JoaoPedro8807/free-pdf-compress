import React, { Fragment } from 'react'

interface TextProps{
  text: string
  children?: React.ReactNode
}

export default function DefaultText( { children, text }: TextProps ) {
  return (
    <Fragment>
      <p>
        {text}
      </p>
      {children}
    </Fragment>
  )
}

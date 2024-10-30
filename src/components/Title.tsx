import React from 'react'

interface TitleProps{
    title: string
    className?: string
}

export default function Title({ title, className } : TitleProps) {
  return (
    <h1 className={className}>{title}</h1>
  )
}

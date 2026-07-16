import React from 'react'

type HeaderProps = {
    title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>{title}</h1>
    </div>
  )
}

export default Header
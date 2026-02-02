import React from 'react'

type HeaderProps = {
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-sm md:text-lg text-gray-500'>{description}</p>
    </div>
  )
}

export default Header
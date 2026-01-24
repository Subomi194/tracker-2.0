import React from 'react'
import Link from 'next/link'
import CustomButton from './ui/CustomButton'
import Logo from './ui/Logo'


const Navbar = () => {
  
  return (
    <header className='w-full bg-red-300'>
      <nav className='max-w-360 mx-auto flex justify-between items-center px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Logo/>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-pink-400 rounded-full text-white min-w-[130px]"
        />

      </nav>

    </header>
  )
}

export default Navbar
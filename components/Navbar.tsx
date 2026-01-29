import React from 'react'
import Link from 'next/link'
import CustomButton from './ui/CustomButton'
import Logo from './ui/Logo'


const Navbar = () => {
  
  return (
    <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed'>
      <nav className='max-w-360 mx-auto flex justify-between items-center px-6 py-4 h-16'>

        <div className='flex justify-center items-center -space-x-4 '>


          <Link href="/">
            <Logo/>
          </Link>
        </div>
        

        

        

      </nav>

    </header>
  )
}

export default Navbar
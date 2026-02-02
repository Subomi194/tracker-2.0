import React from 'react'
import Link from 'next/link'
import CustomButton from './ui/CustomButton'
import { NavLogo } from './ui/Logo';
import { useSidebar } from "@/context/SidebarContext";



const Navbar = () => {
   const { expanded, toggle } = useSidebar();
  
  return (
    <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed'>
      <nav className='max-w-360 mx-auto flex justify-between items-center px-6 py-4 h-16'>

        <div className='flex items-center'>

        <button onClick={toggle} >
            <NavLogo expanded={expanded}/>
          </button>

          {/*<Link href="/">
            <NavLogo/>
          </Link>*/}
        </div>

      </nav>

    </header>
  )
}

export default Navbar
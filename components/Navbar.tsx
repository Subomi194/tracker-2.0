import React from 'react'
import Link from 'next/link'
import CustomButton from './ui/CustomButton'
import { NavLogo } from './ui/Logo';
import { useSidebar } from "@/context/SidebarContext";
import SubmitButton from './ui/SubmitButton';
import Logout from './Logout';



const Navbar = () => {
   const { expanded, toggle } = useSidebar();
  
  return (
    <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 right-0'>
      <nav className='max-w-360 mx-auto flex items-center h-16'>

        <div className='flex items-center '>

        <button onClick={toggle} >
            <NavLogo expanded={expanded}/>
          </button>

          {/*<Link href="/">
            <NavLogo/>
          </Link>*/}

          
        </div>

        <div className='fixed md:right-6 right-4'> 
          <Logout/>
        </div>

      </nav>

    </header>
  )
}

export default Navbar
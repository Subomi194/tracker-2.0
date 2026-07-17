import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import CustomButton from './ui/CustomButton'
import { NavLogo } from './ui/Logo';
import { useSidebar } from "@/context/SidebarContext"
import { usePathname } from 'next/navigation'
import SubmitButton from './ui/SubmitButton';
import Logout from './Logout';
import { sidebarData } from '@/data/SidebarData'
import { longFormatDate } from '@/lib/utils/formatDate'
import { useSearch } from '@/context/SearchContext'
import { RiMenu2Line } from 'react-icons/ri'

type NavbarProps = {
  onSearch?: (query: string) => void
}

const pageTitles: Record<string, string> = {
  '/': 'Hair Routine Tracker',
  '/add': 'Log Entry',
  '/history': 'History',
  '/products': 'Products',
  '/settings': 'Settings',
}

const Navbar = ({onSearch}: NavbarProps) => {
  const pathname = usePathname();
  const { expanded, toggle } = useSidebar();
  const { searchQuery, setSearchQuery } = useSearch()

  const header = pageTitles[pathname] || 'Hair Routine Tracker'

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(e.target.value)
  }
  
  return (
    <>
      <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 right-0 md:block hidden'>
      <nav className='flex items-center justify-between h-16 px-4 md:px-6'>

        {/* Desktop navlogo - image */}
        <div className='flex items-center gap-3'>
          <button onClick={toggle} >
            <NavLogo expanded={expanded} header={header}/>
          </button>

          {/*<Link href="/">
            <NavLogo/>
          </Link>*/}
        </div>


        {/* Right — changes per page */}
        <div className='flex items-center gap-4'>

          {/* Home — nothing extra, stats live in Hero */}

          {/* Add entry — today's date */}
          {pathname === '/add' && (
            <p className='text-sm text-gray-400'>
              {longFormatDate(new Date().toISOString())}
            </p>
          )}

          {/* History — search bar */}
          {pathname === '/history' && (
            <div className='relative'>
              <input
                type="text"
                placeholder="Search entries..."
                value={searchQuery}
                onChange={handleSearch}
                className='text-sm bg-rose-50 border border-rose-200 rounded-xl px-4 py-1.5 pr-8 w-40 md:w-56 focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder:text-gray-400'
              />
              <span className='absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs'>
                ⌘K
              </span>
            </div>
          )}
          <div className="hidden md:block">
            <Logout/>
          </div>
        </div>



        {/* <div className='fixed md:right-6 right-4'> 
          <Logout/>
        </div> */}

      </nav>

    </header>

    <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 right-0 block md:hidden'>
      <nav className='flex items-center justify-between h-16 px-4 md:px-6'>

        {/* mobile navlogo - hamburger */}
        <div className='flex items-center gap-3'>
          <button onClick={toggle} className="p-2 rounded-xl hover:bg-rose-50 transition text-gray-600 hover:text-rose-400">
            <RiMenu2Line size={22} />
          </button>
          <h1 className='font-semibold text-gray-800 text-base md:text-lg'>{header}</h1>
        </div>


        {/* Right — changes per page */}
        <div className='flex items-center gap-4'>

          {/* Home — nothing extra, stats live in Hero */}

          {/* Add entry — today's date */}
          {pathname === '/add' && (
            <p className='text-sm text-gray-400'>
              {longFormatDate(new Date().toISOString())}
            </p>
          )}

          {/* History — search bar */}
          {pathname === '/history' && (
            <div className='relative'>
              <input
                type="text"
                placeholder="Search entries..."
                value={searchQuery}
                onChange={handleSearch}
                className='text-sm bg-rose-50 border border-rose-200 rounded-xl px-4 py-1.5 pr-8 w-40 md:w-56 focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder:text-gray-400'
              />
              <span className='absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs'>
                ⌘K
              </span>
            </div>
          )}

           {/* Settings */}
            {pathname === '/settings'}
          <div className="hidden md:block">
            <Logout/>
          </div>
        </div>



        {/* <div className='fixed md:right-6 right-4'> 
          <Logout/>
        </div> */}

      </nav>

    </header>
    </>
    

    
  )
}

export default Navbar
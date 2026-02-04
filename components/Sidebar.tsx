"use client";

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { SidebarLogo } from './ui/Logo';
import CustomButton from './ui/CustomButton'
import SidebarLink from './SidebarLink'
import { sidebarData } from '@/data/SidebarData'
import { useSidebar } from "@/context/SidebarContext";


const Sidebar = () => {
    const { expanded, toggle } = useSidebar();
    
    
  return (
    <aside className='fixed h-screen left-0 top-0 z-40 '>
        <nav className={`bg-rose-100 text-black border-r-3 border-rose-400 shadow-lg h-full 
            overflow-y-auto transition-all duration-300
            ${expanded ? 'md:w-64 w-44 px-2 space-y-6' : 'md:w-16 w-0 md:p-2 md:space-y-10 '}
            `}>

            <div className="flex items-center justify-between">
             
                <button onClick={toggle} >
                    <SidebarLogo expanded={expanded}/>
                </button>
            </div>

            <div className={`flex flex-col transition-all
                    ${expanded ? "gap-2" : "gap-4 items-center"}
                `}>
                    {sidebarData.map((item) => (
                    <SidebarLink
                        key={item.title}
                        expanded={expanded}
                        title={item.title}
                        path={item.path}
                        icon={item.icon}
                    />
                ))}
            </div>

  

            {/*<SidebarUser/>*/}
        </nav>
    </aside>
  )
}

export default Sidebar
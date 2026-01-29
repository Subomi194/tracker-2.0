"use client";

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Logo from './ui/Logo'
import CustomButton from './ui/CustomButton'
import SidebarLink from './SidebarLink'
import { sidebarData } from '@/data/SidebarData'
import { createContext } from 'vm';
import SidebarUser from './ui/SidebarUser';

const Sidebar = () => {
    const [expanded, setExpanded] =useState(true)
    
    
  return (
    <aside className='flex min-h-screen '>
        <nav className={`bg-rose-100 text-black border-r-3 border-rose-400 shadow-lg 
            ${expanded ? 'w-64 px-2 space-y-6' : 'w-16 p-2 space-y-10 '}
            `}>

            <div className="flex items-center justify-between">
                
                {expanded && <Logo />}
             
                
                <CustomButton
                    title="="
                    btnType="button"
                    containerStyles={`${expanded ? "text-4xl pr-2 " : " pl-4 text-4xl"}`}
                    onClick={() => setExpanded((prev) => !prev)}
                />
 
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

            


        </nav>
    </aside>
  )
}

export default Sidebar
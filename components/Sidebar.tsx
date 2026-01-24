"use client";

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Logo from './ui/Logo'
import CustomButton from './ui/CustomButton'
import SidebarLink from './SidebarLink'
import { sidebarData } from '@/data/SidebarData'
import { createContext } from 'vm';

const Sidebar = ({}) => {
    const [expanded, setExpanded] =useState(true)
    
    
  return (
    <div className=''>
        <nav className='bg-pink-400 text-black h-screen w-64'>
            
            <div className='flex justify-between'>
                <button 
                className={`overflow-hidden transition-all
                ${expanded ? 'w-17' : 'w-0'}`}>
                    <Logo/>  
                </button>
                
                <CustomButton
                    title="="
                    btnType="button"
                    containerStyles="text-4xl"
                    handleClick={() => setExpanded((prev) => !prev)}
                />
            </div>

          

            <div className='flex flex-col'>
                {sidebarData.map((item) => (
                    <SidebarLink
                        key={item.title}
                        title={item.title}
                        path={item.path}
                        icon={item.icon}
                    />
                ))}
            </div>


        </nav>
    </div>
  )
}

export default Sidebar
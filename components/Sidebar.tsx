"use client";

import React from 'react'
import Link from 'next/link'
import { SidebarLogo } from './ui/Logo';
import CustomButton from './ui/CustomButton'
import SidebarLink from './SidebarLink'
import { sidebarData } from '@/data/SidebarData'
import { useSidebar } from "@/context/SidebarContext";
import NavbarUser from './ui/NavbarUser';

type SidebarProps = {
  name?: string | null
  email?: string | null
}

const Sidebar = ({ name, email }: SidebarProps) => {
  const { expanded, toggle } = useSidebar();
  return (

    <>

      {expanded && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggle}
        />
      )}
      <aside className='fixed h-screen left-0 top-0 z-50'>
        <nav className={`bg-blush-light text-ink border-r-3 border-pink-accent shadow-lg h-full 
            flex flex-col
            overflow-y-auto transition-all duration-300
${expanded ? 'md:w-64 w-44 px-2 translate-x-0' : 'md:w-16 w-0 md:p-2 -translate-x-full md:translate-x-0'}
            `}>

          <div className="flex items-center justify-between shrink-0 pt-2">
            <button onClick={toggle}>
              <SidebarLogo expanded={expanded}/>
            </button>
          </div>

          <div className={`flex flex-col transition-all mt-6
${expanded ? "gap-2" : "gap-4 items-center"}
                `}>
            {sidebarData.map((item) => (
              <SidebarLink
                key={item.title}
                expanded={expanded}
                title={item.title}
                header={item.header}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Pushes NavbarUser to the bottom regardless of how many nav links exist */}
          <div className="mt-auto">
            <NavbarUser name={name} email={email} expanded={expanded} />
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
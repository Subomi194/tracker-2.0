"use client"

import React from 'react'
import { SidebarItemProps } from '@/types/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarLink = ({title, path, icon}: SidebarItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`px-4 py-2 rounded-md transition
        ${isActive ? "bg-pink-400 text-white" : "text-black"}
      `}
    >
      {title}
    </Link>
  )
}

export default SidebarLink
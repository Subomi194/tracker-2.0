"use client"

import React from 'react'
import { SidebarItemProps } from '@/types/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SidebarLink = ({title, path, icon: Icon, expanded}: SidebarItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`px-4 py-2 rounded-xl flex items-center gap-3 transition hover:text-white hover:bg-rose-400/50
        ${isActive ? "bg-rose-400 text-white" : "text-black"}
      `}
    >
      <Icon size={expanded ? 20 : 26}  />
      {expanded && <span>{title}</span>}
    </Link>
  )
}

export default SidebarLink
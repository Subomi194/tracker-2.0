"use client"

import React from 'react'
import { SidebarItemProps } from '@/types/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/context/SidebarContext'

const SidebarLink = ({title, header, path, icon: Icon, expanded}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  const { toggle } = useSidebar();

  return (
    <Link
      href={path}
      onClick={() => {
        if (window.innerWidth < 768) {
          toggle()
        }
      }}
      className={`px-4 py-2 rounded-xl flex items-center gap-3 transition hover:text-cream hover:bg-rose-mid
${isActive ? "bg-pink-accent text-cream" : "text-ink-muted"}
      `}
    >
      <Icon size={expanded ? 20 : 26}  />
      {expanded && <span>{title}</span>}
    </Link>
  )
}

export default SidebarLink
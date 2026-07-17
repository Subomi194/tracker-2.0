"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const settingsLinks = [
  { title: 'Profile',       path: '/settings/personal' },
  { title: 'Hair profile',  path: '/settings/hair' },
  { title: 'Notifications', path: '/settings/notification' },
  { title: 'Account',       path: '/settings/account' },
]

const SettingsSidebarLink = () => {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile — horizontal scrollable tab bar */}
      <div className="flex md:hidden overflow-x-auto gap-2 pb-3 scrollbar-none">
        {settingsLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition border
                ${isActive
                  ? "bg-rose-400 text-white border-rose-400"
                  : "bg-white text-gray-500 border-gray-200 hover:border-rose-300 hover:text-rose-400"
                }`}
            >
              {link.title}
            </Link>
          )
        })}
      </div>

      {/* Desktop — vertical sidebar */}
      <nav className="hidden md:flex flex-col gap-1 w-44 shrink-0">
        {settingsLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition
                ${isActive
                  ? "bg-rose-50 text-rose-500 font-semibold"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }`}
            >
              {link.title}
            </Link>
          )
        })}
      </nav>
    </>
  )
}

export default SettingsSidebarLink
"use client"

import { UserProps } from '@/types/user'
import { LuLogOut } from "react-icons/lu"
import Logout from '@/components/Logout'

type NavbarUserProps = {
  name?: string | null
  email?: string | null
  expanded?: boolean
}

const NavbarUser = ({ name, email, expanded }: NavbarUserProps) => {

  const initial = (name?.[0] ?? "?").toUpperCase()

  return (
    <div className={`p-3 border-t border-blush-border ${expanded ? '' : 'flex justify-center'}`}>
      {expanded ? (
        <>
          <div className="flex items-center gap-3 px-2 py-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-rose-deep flex items-center justify-center text-cream text-sm font-bold shrink-0">
              {initial}
            </div>
            <div className="min-w-0">
              <p className="text-ink text-sm font-medium truncate">{name ?? "User"}</p>
              <p className="text-ink-muted text-xs truncate">{email}</p>
            </div>
          </div>

          <Logout
            className="w-full flex items-center gap-3 px-2 py-2 rounded-xl text-ink-muted hover:text-rose-deep hover:bg-blush-light transition-colors text-sm"
          >
            <LuLogOut className="w-4 h-4" /> Sign out
          </Logout>
        </>
      ) : (
        <Logout
          title="Sign out"
          className="text-ink-muted hover:text-rose-deep p-2 rounded-lg hover:bg-blush-light transition-colors"
        >
          <LuLogOut className="w-4 h-4" />
        </Logout>
      )}
    </div>
  )
}

export default NavbarUser
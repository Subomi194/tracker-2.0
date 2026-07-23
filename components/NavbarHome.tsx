"use client"

import Logout from './Logout'
import { longFormatDate } from "@/lib/utils/formatDate"
import { calculateTimeOfDay, calculateDaysSince } from "@/lib/utils/calculate"
import NavbarUser from '@/components/ui/NavbarUser'

type NavbarHomeProps = {
  lastWashDate?: string | null
  lastStyleDate?: string | null
  totalEntries?: number
}

const NavbarHome = ({ lastWashDate, lastStyleDate, totalEntries = 0 }: NavbarHomeProps) => {
  const daysSinceWash = calculateDaysSince(lastWashDate)
  const daysSinceStyle = calculateDaysSince(lastStyleDate)

  return (
    <header className='w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 right-0 z-30'>
      <nav className='max-w-6xl mx-auto flex items-center justify-between h-16 px-6'>

        <div>
          <p className="text-xs text-gray-400">{longFormatDate(new Date().toISOString())}</p>
          <p className="text-base font-semibold text-gray-800">{calculateTimeOfDay()} 👋</p>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-center">
            <p className="text-xl font-bold text-rose-500">{daysSinceWash ?? "—"}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Days since wash</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-rose-500">{daysSinceStyle ?? "—"}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Days in style</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-rose-500">{totalEntries}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide">Total entries</p>
          </div>
        </div>

        <NavbarUser />
      </nav>
    </header>
  )
}

export default NavbarHome
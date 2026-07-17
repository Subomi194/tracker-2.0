"use client"

import Link from 'next/link'
import { useSidebar } from "@/context/SidebarContext"
import { RoutineComponent } from '@/types/routine'
import { UserProps } from '@/types/user'
import { calculateTimeOfDay, calculateDaysSince } from '@/lib/utils/calculate'
import { shortFormatDate } from '@/lib/utils/formatDate'
import { NavLogo } from './ui/Logo';
import Logout from './Logout'

type HeroProps = {
  name: UserProps['name']
  routines: RoutineComponent[]
  lastWashDate: string | null
  lastStyleDate: string | null
}

const Hero = ({ name, routines = [], lastWashDate, lastStyleDate }: HeroProps) => {
  const { toggle } = useSidebar()
  
  const greeting = calculateTimeOfDay()
  const daysSinceWash = calculateDaysSince(lastWashDate)
  const daysSinceStyle = calculateDaysSince(lastStyleDate)
  const recentRoutines = routines.slice(0, 3) // Get the 3 most recent routines

  return (
    <div className="mx-auto max-w-4xl space-y-6">

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={toggle}
          className="md:hidden p-2 rounded-xl hover:bg-rose-50"
          aria-label="Open sidebar"
        >
          <NavLogo/>
        </button>
        <div className="ml-auto">
          <Logout />
        </div>
      </div>

      {/* Greeting */}
      <div>
        <p className="text-2xl font-semibold text-gray-800">{greeting}, {name || "User"}</p>
        <p className="text-gray-500 text-sm mt-1">Here's your hair journey at a glance.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-rose-500">
            {daysSinceWash !== null ? daysSinceWash : "—"}
          </p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Days since wash</p>
        </div>
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-rose-500">
            {daysSinceStyle !== null ? daysSinceStyle : "—"}
          </p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Days in hairstyle</p>
        </div>
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-rose-500">{routines.length}</p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Total entries</p>
        </div>
      </div>

      {/* Empty state */}
      {routines.length === 0 && (
        <div className="text-center py-16 bg-rose-50/50 rounded-3xl border border-rose-100">
          <p className="text-lg font-semibold text-gray-700">No routines yet</p>
          <p className="text-gray-400 text-sm mt-1 mb-6">Start tracking your hair care journey</p>
          <Link
            href="/add"
            className="bg-rose-400 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-rose-500 transition"
          >
            Add first routine
          </Link>
        </div>
      )}

      {/* Recent entries */}
      {routines.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Recent entries</p>
            <Link href="/history" className="text-sm text-rose-400 hover:underline">See all</Link>
          </div>

          {recentRoutines.map((routine) => (
            <div key={routine.id} className="rounded-2xl bg-rose-100/50 p-2">
              <div className="rounded-[1.25rem] bg-white shadow-sm p-4 space-y-2">

                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-wrap gap-2">
                    {routine.routine_routine_types.map((rrt) => (
                      <span
                        key={rrt.routine_types.id}
                        className="text-sm font-medium rounded-2xl bg-rose-50 text-rose-700 px-3 py-1 border border-rose-200"
                      >
                        {rrt.routine_types.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm whitespace-nowrap shrink-0">
                    {shortFormatDate(routine.date)}
                  </p>
                </div>

                {routine.notes && (
                  <p className="text-sm font-semibold text-gray-700">{routine.notes}</p>
                )}

                {routine.products.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {routine.products.map((product, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full border">
                        {product}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

          <Link
            href="/add"
            className="block text-center bg-rose-400 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-rose-500 transition mt-2"
          >
            Add routine
          </Link>
        </div>
      )}

    </div>
  )
}

export default Hero
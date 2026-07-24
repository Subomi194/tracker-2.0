"use client"

import Link from 'next/link'
import { useSidebar } from "@/context/SidebarContext"
import { RoutineComponent } from '@/types/routine'
import { UserProps } from '@/types/user'
import { calculateTimeOfDay, calculateDaysSince } from '@/lib/utils/calculate'
import { shortFormatDate } from '@/lib/utils/formatDate'
import { NavLogo } from './ui/Logo';
import Logout from './Logout'
import { RiMenu2Line } from 'react-icons/ri'
import NavbarUser from '@/components/ui/NavbarUser'

type HomeProps = {
  name: UserProps['name']
  routines: RoutineComponent[]
  lastWashDate: string | null
  lastStyleDate: string | null
}

const tagColors = ['text-rose-deep', 'text-rose-mid', 'text-pink-accent']

const Home = ({ name, routines = [], lastWashDate, lastStyleDate }: HomeProps) => {
  const { toggle } = useSidebar()

  const greeting = calculateTimeOfDay()
  const daysSinceWash = calculateDaysSince(lastWashDate)
  const daysSinceStyle = calculateDaysSince(lastStyleDate)
  const recentRoutines = routines.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl space-y-6">

      <div className="flex items-center justify-between mb-6">

        <button onClick={toggle} className="rounded-xl hover:bg-blush-light transition text-ink-muted hover:text-pink-accent md:hidden block">
          <RiMenu2Line size={22} />
        </button>

        <button
          onClick={toggle}
          className="md:hidden p-2 rounded-xl hover:bg-blush-light"
          aria-label="Open sidebar"
        >
          <NavLogo/>
        </button>

        {/* <div className="ml-auto">
          <Link href="/settings">
            <NavbarUser />
          </Link>
        </div> */}

      </div>

      {/* Greeting */}
      <div>
        <p className="text-2xl font-semibold text-ink">{greeting}, {name || "User"}</p>
        <p className="text-ink-muted text-sm mt-1">Here's your hair journey at a glance.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blush-light border border-blush-border rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-pink-accent">
            {daysSinceWash !== null ? daysSinceWash : "—"}
          </p>
          <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">Days since wash</p>
        </div>
        <div className="bg-blush-light border border-blush-border rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-pink-accent">
            {daysSinceStyle !== null ? daysSinceStyle : "—"}
          </p>
          <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">Days in hairstyle</p>
        </div>
        <div className="bg-blush-light border border-blush-border rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-pink-accent">{routines.length}</p>
          <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">Total entries</p>
        </div>
      </div>

      {/* Empty state */}
      {routines.length === 0 && (
        <div className="text-center py-16 bg-blush-light/50 rounded-3xl border border-blush-border">
          <p className="text-lg font-semibold text-ink">No routines yet</p>
          <p className="text-ink-muted text-sm mt-1 mb-6">Start tracking your hair care journey</p>
          <Link
            href="/add"
            className="bg-rose-deep text-cream px-6 py-2.5 rounded-xl font-semibold hover:bg-rose-mid transition"
          >
            Add first routine
          </Link>
        </div>
      )}

      {/* Recent entries */}
      {routines.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">Recent entries</p>
            <Link href="/history" className="text-sm text-pink-accent hover:text-pink-accent-hover hover:underline">See all</Link>
          </div>

          {recentRoutines.map((routine) => {
            const products = routine.routine_products.map((rp) => rp.products)
            return(
            <div key={routine.id} className="rounded-4xl border border-blush-border p-2">
              <div className="rounded-[1.75rem] bg-cream shadow-sm p-4 space-y-2">

                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-wrap gap-2">
                    {routine.routine_routine_types.map((rrt, i) => (
                      <span
                        key={rrt.routine_types.id}
                        className={`text-sm font-medium rounded-2xl bg-blush-light ${tagColors[i % tagColors.length]} px-3 py-1 border border-blush-border`}
                      >
                        {rrt.routine_types.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-ink-muted text-sm whitespace-nowrap shrink-0">
                    {shortFormatDate(routine.date)}
                  </p>
                </div>

                {routine.notes && (
                  <p className="text-sm font-semibold text-ink">{routine.notes}</p>
                )}

                {products.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {products.map((product) => (
                      <span key={product.id} className="text-xs bg-cream text-ink-muted px-2.5 py-0.5 rounded-full border border-blush-border">
                        {product.brand ? `${product.brand} ${product.product_name}` : product.product_name}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
            )
          })}

          <Link
            href="/add"
            className="block text-center bg-rose-deep text-cream px-6 py-2.5 rounded-xl font-semibold hover:bg-rose-mid transition mt-2"
          >
            Add routine
          </Link>
        </div>
      )}

    </div>
  )
}

export default Home
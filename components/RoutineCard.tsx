"use client"

import { useState, useRef } from 'react'
import { motion, PanInfo } from "motion/react"
import Link from 'next/link'
import { RoutineComponent } from '@/types/routine'
import { shortFormatDate } from '@/lib/utils/formatDate'
import { LuPencil, LuTrash2 } from "react-icons/lu"
import { useIsMobile } from '@/lib/hooks/useIsMobile'

type RoutineCardProps = {
  routine: RoutineComponent
  onDelete: (id: number) => void
}

const MAX_SWIPE = 140
const DISTANCE_THRESHOLD = MAX_SWIPE / 2
const VELOCITY_THRESHOLD = 500 // px/sec — a quick flick opens it even under the distance threshold


const RoutineCard = ({ routine, onDelete }: RoutineCardProps) => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const products = routine.routine_products.map((rp) => rp.products)

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    const shouldOpen =
      info.offset.x > DISTANCE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD
    setOpen(shouldOpen)
  }

  const closeSwipe = () => setOpen(false)


  return (
    <div className="relative bg-blush-light rounded-4xl p-2 mb-4 overflow-hidden">

      {/* Buttons revealed underneath on mobile swipe */}
      <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-3 bg-blush-light md:hidden">
        <Link
          href={`/add?edit=${routine.id}`}
          onClick={closeSwipe}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-rose-deep text-cream"
        >
          <LuPencil size={18} />
        </Link>
        <button
          onClick={() => { onDelete(routine.id); closeSwipe(); }}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-pink-accent text-cream"
        >
          <LuTrash2 size={18} />
        </button>
      </div>

      <motion.div className="relative bg-white border border-blush-border rounded-[1.75rem] p-2 group"
        drag={isMobile ? "x" : false}
        dragConstraints={{ left: 0, right: MAX_SWIPE }}
        dragElastic={0.15}
        dragMomentum={false}
        animate={{ x: open ? MAX_SWIPE : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
        onDragEnd={handleDragEnd}
      >

        <div className="rounded-3xl p-3 pb-4 space-y-2">

          <div className="flex justify-between items-start gap-2">
            <div className="flex flex-wrap gap-2">
              {routine.routine_routine_types.map((rrt) => (
                <div
                  key={rrt.routine_types.id}
                  className="md:text-base text-sm font-medium rounded-2xl bg-blush-light text-rose-deep px-3 py-1 border border-blush-border"
                >
                  {rrt.routine_types.name}
                </div>
              ))}
            </div>
            <p className="text-ink-muted whitespace-nowrap shrink-0 md:text-base text-sm">
              {shortFormatDate(routine.date)}
            </p>
          </div>

          <div className="flex-1">
            {routine.notes.length > 0 ? (
              <p className="mb-1 font-bold text-ink sm:text-sm md:text-base">{routine.notes}</p>
            ) : (
              <span className="text-ink-muted text-sm italic">No notes added!</span>
            )}
          </div>

          <div className="flex justify-between items-end gap-2">
            <div className="flex flex-wrap gap-2">
              {products.length > 0 ? (
                products.map((product) => (
                  <span key={product.id} className="text-xs border border-blush-border bg-cream text-ink-muted font-medium px-2.5 py-0.5 rounded-full">
                    {product.brand ? `${product.brand} ${product.product_name}` : product.product_name}
                  </span>
                ))
              ) : (
                <span className="text-ink-muted text-sm italic">No products added!</span>
              )}
            </div>

            {/* Desktop-only hover actions, bottom-right */}
            <div className="hidden md:flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              <Link
                href={`/add?edit=${routine.id}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-rose-deep hover:bg-rose-deep hover:text-cream transition"
              >
                <LuPencil size={14} />
              </Link>
              <button
                onClick={() => onDelete(routine.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-pink-accent hover:bg-pink-accent hover:text-cream transition"
              >
                <LuTrash2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RoutineCard
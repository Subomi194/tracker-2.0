"use client"

import { useState } from 'react'
import { RoutineComponent } from "@/types/routine"
import { formatMonthYear } from "@/lib/utils/formatDate"
import { useSearch } from "@/context/SearchContext"
import RoutineCard from './RoutineCard'
import { LuChevronRight } from "react-icons/lu"
import { deleteRoutine } from '@/app/(app)/add/actions'

const RoutineHistory = ({routines}: {routines: RoutineComponent[]}) => {
    const { searchQuery } = useSearch();
    const [items, setItems] = useState(routines)
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

    const toggleMonth = (monthYear: string) => {
        setCollapsed(prev => ({ ...prev, [monthYear]: !prev[monthYear] }))
    }

    const handleDelete = async (id: number) => {
        // Optimistic UI: remove immediately, then call the server action
        setItems(prev => prev.filter(r => r.id !== id))
        // await deleteRoutine(id)
    }

    const filtered = items.filter((r) => {
        if (!searchQuery) return true
        const q = searchQuery.toLowerCase()
        return (
            r.notes?.toLowerCase().includes(q) ||
            r.products.some((p) => p.toLowerCase().includes(q)) ||
            r.routine_routine_types.some((rrt) =>
                rrt.routine_types.name.toLowerCase().includes(q)
            )
        )
    })

    const groupedRoutines = filtered.reduce((acc, routine) => {
        const monthYear = formatMonthYear(routine.date);
        if (!acc[monthYear]) acc[monthYear] = [];
        acc[monthYear].push(routine);
        return acc;
    }, {} as Record<string, RoutineComponent[]>);

    return (
        <div className="md:p-6 p-2">

            {items.length === 0 && (
                <div className='text-center py-20'>
                    <h2 className='text-2xl font-bold text-ink'>No routines added yet</h2>
                    <p className='text-ink-muted mt-2'>Add your first routine to get started</p>
                </div>
            )}

            <div className='grid grid-cols-1'>
                {Object.entries(groupedRoutines).map(([monthYear, monthRoutines]) => {
                    const isCollapsed = collapsed[monthYear]

                    return (
                        <div key={monthYear} className="mb-2">
                            <button
                                onClick={() => toggleMonth(monthYear)}
                                className="flex items-center gap-2 mb-2 group w-full text-left"
                            >
                                <LuChevronRight
                                    size={16}
                                    className={`text-rose-deep transition-transform ${isCollapsed ? '' : 'rotate-90'}`}
                                />
                                <h2 className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-ink-muted group-hover:text-rose-deep transition">
                                    {monthYear}
                                </h2>
                            </button>

                            {!isCollapsed && monthRoutines.map((routine) => (
                                <RoutineCard key={routine.id} routine={routine} onDelete={handleDelete} />
                            ))}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default RoutineHistory
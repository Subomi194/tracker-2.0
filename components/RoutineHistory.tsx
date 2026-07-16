
"use client"

import { RoutineComponent } from "@/types/routine"
import {shortFormatDate, formatMonthYear} from "@/lib/utils/formatDate"
import { useSearch } from "@/context/SearchContext";

const RoutineHistory = ({routines}: {routines: RoutineComponent[]}) => {
    const { searchQuery } = useSearch();

    const filtered = routines.filter((r) => {
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

        if (!acc[monthYear]) {
            acc[monthYear] = [];
        }

        acc[monthYear].push(routine);

        return acc;
        }, {} as Record<string, RoutineComponent[]>);
    

  return (
    <div className="md:p-6 p-2">

        {routines.length === 0 && (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-bold'>No routines added yet</h2>
                <p className='text-gray-500 mt-2'>Add your first routine to get started</p>
            </div>

        )}

        <div className='grid grid-cols-1'>

            {Object.entries(groupedRoutines).map(([monthYear, monthRoutines]) => (
                <div key={monthYear} >
                <h2 className="mb-2 text-sm md:text-base uppercase tracking-[0.2em] font-semibold">{monthYear}</h2>

                {monthRoutines.map((routine) => (
                    <div key={routine.id} className="rounded-4xl mb-4 bg-rose-100/50 p-2">
                    {/* Your existing routine card */}
                        <div className="rounded-[1.75rem] bg-white shadow-sm p-2">
                            <div className="rounded-3xl hover:border-2 hover:border-rose-400/70 md:p-3 p-3 space-y-2 ">

                                <div className="flex justify-between items-start gap-2">
                                    {/* Routine types */}
                                    <div className="flex flex-wrap gap-2" >
                                    {routine.routine_routine_types.map((rrt) => (
                                        <div
                                            key={rrt.routine_types.id}
                                            className=" md:text-base text-sm font-medium rounded-2xl bg-rose-50 text-rose-700 px-3 py-1 border border-rose-200"
                                        >
                                            {rrt.routine_types.name}
                                        </div>
                                    
                                    ))}
                                    </div>

                                    {/* Date */}
                                    <div className=''>
                                        <p className="text-gray-600 whitespace-nowrap shrink-0 md:text-base text-sm">{shortFormatDate(routine.date)}</p>
                                    </div>
                                </div>
                                {/* Notes */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {routine.notes.length > 0 ? (
                                        <p className='mb-1 font-bold sm:text-sm md:text-base'>{routine.notes}</p>  
                                            
                                        ) : (
                                            <span className="text-gray-400 text-sm italic">
                                            No notes added!
                                            </span>
                                        )}
                                    </div>
                                    
                                </div>

                                {/*Products*/}
                                <div className="flex flex-wrap gap-2">
                                    {routine.products.length > 0 ? (
                                        routine.products.map((product, index) => (
                                        <span
                                            key={index}
                                            className=" text-xs border bg-gray-100 text-gray-800  font-medium px-2.5 py-0.5 rounded-full"
                                        >
                                            {product}
                                        </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-400 text-sm italic">
                                        No products added!
                                        </span>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            ))}
   
        </div>
        
          
    </div>
  )
}

export default RoutineHistory
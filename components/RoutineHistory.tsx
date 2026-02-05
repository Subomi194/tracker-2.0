
"use client"

import { RoutineComponent } from "@/types/routine"
import formatDate from "@/lib/utils/formatDate"

const RoutineHistory = ({routines}: {routines: RoutineComponent[]}) => {
    



  return (
    <div className="md:p-6 p-2">

        {routines.length === 0 && (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-bold'>No routines added yet</h2>
                <p className='text-gray-500 mt-2'>Add your first routine to get started</p>
            </div>

        )}

        <div className='grid grid-cols-1'>

        {routines?.map((routine) => {
  
            return (
            <div key={routine.id} className='rounded-4xl mb-4 bg-rose-100/50 p-2'>
                <div className="rounded-[1.75rem] bg-white shadow-sm p-2">
                    <div className="rounded-3xl hover:border-2 hover:border-rose-400/70 md:p-6 p-4 space-y-2 ">

                        {/* Routine types */}
                        <div className="flex flex-wrap gap-2" >
                        {routine.routine_routine_types.map((rrt) => (
                            <div
                                key={rrt.routine_types.id}
                                className=" text-base font-medium rounded-full bg-rose-50 text-rose-700 px-3 py-1 border border-rose-200"
                            >
                                {rrt.routine_types.name}
                            </div>
                           
                         ))}
                        </div>

                        {/* Date */}
                        <div className='flex justify-between'>
                            <div>
                                <p className="text-gray-600">{formatDate(routine.date)}</p>
                            </div>
                        </div>

                        {/*Products*/}
                        <div className="flex-1">
                            <p className="text-gray-600">Products:</p>
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
                                    No products added
                                    </span>
                                )}
                                </div>
                            </div>

                        {/* Notes */}
                        <div className="flex-1">
                            <p className="mt-4 text-gray-600">Notes:</p>
                            <p className='mt-2'>{routine.notes}</p>
                        </div>
                        
                    </div>
                </div>
            </div> 
            )
        })}
        </div>
        
          
    </div>
  )
}

export default RoutineHistory
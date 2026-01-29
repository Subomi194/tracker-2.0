
"use client"

import { RoutineComponent } from "@/types/routine"

const RoutineHistory = ({routines}: {routines: RoutineComponent[]}) => {
    


  return (
    <div className="p-6">

        {routines.length === 0 ? (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-bold'>No routines added yet</h2>
                <p className='text-gray-500 mt-2'>Add your first routine to get started</p>
            </div>
        ) : (

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>

            </div>
        )}
        
        {routines?.map((routine) => {


                console.log(routine.products)
  
            return (
            <div key={routine.id} className='rounded-4xl mb-8 bg-rose-100/50 p-2'>
                <div className="rounded-[1.75rem] bg-white shadow-sm p-2">
                    <div className="rounded-3xl hover:border-2 hover:border-rose-400/70 p-6 space-y-4 ">

                        {/* Routine types */}
                        <div className="flex flex-wrap gap-2" >
                        {routine.routine_routine_types.map((rrt) => (
                            <div
                                key={rrt.routine_types.id}
                                className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                            >
                                {rrt.routine_types.name}
                            </div>
                           
                         ))}
                        </div>

                        {/* Date */}
                        <div className='flex justify-between'>
                            <div>
                                <p>{new Date(routine.date).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/*Products*/}
                        <div className="flex-1">
                            <p>Products:</p>
                            <div className="flex flex-wrap gap-2">
                                {routine.products.length > 0 ? (
                                    routine.products.map((product, index) => (
                                    <span
                                        key={index}
                                        className="bg-rose-50 text-rose-700 text-xs px-3 py-1 rounded-full border border-rose-200"
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
                            <p className="mt-4 text-gray-700">Notes:</p>
                            <p className=''>{routine.notes}</p>
                        </div>
                        
                    </div>
                </div>
            </div> 
            )
        })}
        
          
    </div>
  )
}

export default RoutineHistory
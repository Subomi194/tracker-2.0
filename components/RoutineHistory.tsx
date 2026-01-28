
"use client"

import { RoutineComponent } from "@/types/routine"

const RoutineHistory = ({routines}: {routines: RoutineComponent[]}) => {


  return (
    <div className="p-6">

        {routines?.map((routine) => (
            <div key={routine.id} className='border border-rose-200 bg-white rounded-2xl p-6 mb-6'>

                {routine.routine_routine_types.map((rrt) => (
                        <div
                            key={rrt.routine_types.id}
                            className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                        >
                            {rrt.routine_types.name}
                        </div>
                    )
                )}

                <div className='flex justify-between'>
                    <div>
                        <p>{new Date(routine.date).toLocaleDateString()}</p>
                    </div>
                </div>
                <p>{routine.products}</p>
                <p className='mt-4 text-gray-700'>{routine.notes}</p>
            </div>
        ))}

        {routines.length === 0 ? (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-bold'>No routines added yet</h2>
                <p className='text-gray-500 mt-2'>Add your first routine to get started</p>
            </div>
        ) : (

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>

            </div>
        )
}

        
    </div>
  )
}

export default RoutineHistory
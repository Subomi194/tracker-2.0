import React from 'react'
import Header from '@/components/ui/Header'
import {createClient} from '@/lib/supabase/server'
import RoutineHistory from '@/components/RoutineHistory'
import { RoutineComponent } from '@/types/routine'



const page = async () => {

  const supabase = await createClient()

  console.log('HISTORY ADD ACTION HIT')

    const {data: routines, error} = await supabase
      .from("routines")
      .select(`
        id,
        date,
        notes,
        products,
        routine_routine_types (
          routine_types (
            id,
            name
          )
        )
      `)
      .order("date", {ascending: false})
      .returns<RoutineComponent[]>()

      if (error) {
        console.error("Error fetching routines", error);
      }

       
  return (
    <div>
      <div className='px-6'>
        <Header 
          title='Routine History' 
          description='View your past hair care routines'
        />
      </div>
      <RoutineHistory routines={routines ?? []}/>
    </div>
  )
}

export default page
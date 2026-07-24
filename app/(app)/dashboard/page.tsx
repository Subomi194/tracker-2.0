
import { createClient } from '@/lib/supabase/server'
import { RoutineComponent } from '@/types/routine'
import Home from '@/components/Home'
import readProfile from '@/app/(onboarding)/profile/readProfile'


const page = async () => {
  const supabase = await createClient()

  console.log('Home ACTION HIT')

  const { data: routines, error } = await supabase
  
    .from("routines")
    .select(`
      id,
      date,
      notes,
      routine_routine_types (
        routine_types ( id, name )
      ),
      routine_products (
        products ( id, brand, product_name, category )
      )
    `)
    .order("date", { ascending: false })
    .returns<RoutineComponent[]>()

  if (error) {
    console.error("Error fetching routines", error)
  }

  const allRoutines = routines ?? []

  // Find most recent wash day
  const lastWash = allRoutines.find((r) =>
    r.routine_routine_types.some((rrt) =>
      rrt.routine_types.name.toLowerCase().includes("wash day")
    )
  )

  // Find most recent protective style
  const lastStyle = allRoutines.find((r) =>
    r.routine_routine_types.some((rrt) =>
      rrt.routine_types.name.toLowerCase().includes("protective style")
    )
  )

  const data = await readProfile();

  return (
    <div>
      <main>
        <Home
          name={data?.profile?.name}
          routines={allRoutines}
          lastWashDate={lastWash?.date ?? null}
          lastStyleDate={lastStyle?.date ?? null}
        />
      </main>
      
    </div>
    
  )
}

export default page
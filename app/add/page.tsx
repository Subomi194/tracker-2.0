
import {createClient} from '@/lib/supabase/server'
import Header from '@/components/ui/Header'
import AddRoutineForm from '@/components/AddRoutineForm'


const page = async () => {

  const supabase = await createClient()

    const {data: routineTypes, error} = await supabase
      .from("routine_types")
      .select("id, name")
      .order("name")

    if (error) {
      console.log(error);
    }
    

  return (
    <div className='max-w-360 mx-auto '>
      <Header 
        title='Add New Routine' 
        description='Fill in the details of your new routine'
      />

      <AddRoutineForm routineTypes={routineTypes ?? []}/> {/*if routinetypes is null or undefined, bring nothing else bring reoutineType*/}
    </div>
  )
}

export default page
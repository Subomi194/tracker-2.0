
import {createClient} from '@/lib/supabase/server'
import Header from '@/components/ui/Header'
import AddRoutineForm from '@/components/AddRoutineForm'


const page = async () => {

  const supabase = await createClient()

    const {data: routineTypes, error} = await supabase
      .from("routine_types")
      .select("id, name")

    if (error) {
      console.log(error);
    }
    

  return (
    <div className='max-w-360 mx-auto'>
      <div className='md:px-40'>
      <Header 
        title='Add Routine Entry' 
        description='Log your wash day, new hairstyle, or treatment'
      />
      </div>
      <AddRoutineForm routineTypes={routineTypes ?? []}/> {/*if routinetypes is null or undefined, bring nothing else bring reoutineType*/}
    </div>
  )
}

export default page
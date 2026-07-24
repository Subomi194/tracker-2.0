import { createClient } from '@/lib/supabase/server'
import AddRoutineForm from '@/components/AddRoutineForm'

const page = async ({
    searchParams,
}: {
    searchParams: Promise<{ edit?: string }>
}) => {

    const supabase = await createClient()

    const {data: routineTypes, error} = await supabase
        .from("routine_types")
        .select("id, name")

    if (error) {
        console.log(error);
    }

    const { edit } = await searchParams
    let initialData = null

    if (edit) {
        const { data: routine, error: routineError } = await supabase
            .from('routines')
            .select(`
                id,
                date,
                notes,
                routine_routine_types ( routine_type_id ),
                routine_products ( products ( product_name ) )

            `)
            .eq('id', edit)
            .single()

        if (routineError) {
            console.log(routineError)
        } else if (routine) {
            initialData = {
                id: routine.id,
                date: routine.date,
                notes: routine.notes,
                products: routine.routine_products.map((rp: any) => rp.products.product_name),
                routineTypeIds: routine.routine_routine_types.map(
                    (rrt: { routine_type_id: number }) => rrt.routine_type_id
                ),
            }
        }
    }

    return (
        <div className='max-w-360 mx-auto'>
            <AddRoutineForm routineTypes={routineTypes ?? []} initialData={initialData} />
        </div>
    )
}

export default page
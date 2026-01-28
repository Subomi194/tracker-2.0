'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function addRoutine(formData: FormData) {

    console.log('ADD ROUTINE ACTION HIT')
    const supabase = await createClient() 

    const date = formData.get('date')
    const notes = formData.get('notes')
    const routineTypeIds = JSON.parse(
        formData.get('routine_type_ids') as string
    )
    const rawProducts = formData.get('products')
    const products: string[] = rawProducts
        ? JSON.parse(rawProducts as string)
        : []

    //  User
    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    // Routine
    const {data: routine, error} = await supabase
    .from('routines')
    .insert(
        {
            user_id: user.id,
            date,
            notes,
            products
        }
    )
    .select()
    .single()

    if (error) throw error

    // Routine - Routine type
    const rows = routineTypeIds.map((typeId: number) => ({
        routine_id: routine.id,
        routine_type_id: typeId
    }))

    const { error: joinTypeError } = await supabase
        .from('routine_routine_types')
        .insert(rows)

    if (joinTypeError) {
        console.error('JOIN INSERT ERROR:', joinTypeError)
        throw joinTypeError
        }

    revalidatePath('/', 'layout')
    

}

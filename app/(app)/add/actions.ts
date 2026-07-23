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

    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

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
    redirect('/')
}

export async function updateRoutine(routineId: number, formData: FormData) {

    const supabase = await createClient()

    const date = formData.get('date')
    const notes = formData.get('notes')
    const routineTypeIds: number[] = JSON.parse(
        formData.get('routine_type_ids') as string
    )
    const rawProducts = formData.get('products')
    const products: string[] = rawProducts
        ? JSON.parse(rawProducts as string)
        : []

    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    const { error: updateError } = await supabase
        .from('routines')
        .update({ date, notes, products })
        .eq('id', routineId)
        .eq('user_id', user.id)

    if (updateError) throw updateError

    // Remove any previously-selected types that are no longer selected
    if (routineTypeIds.length > 0) {
        const { error: deleteError } = await supabase
            .from('routine_routine_types')
            .delete()
            .eq('routine_id', routineId)
            .not('routine_type_id', 'in', `(${routineTypeIds.join(',')})`)

        if (deleteError) throw deleteError
    } else {
        // Nothing selected — remove all existing links
        const { error: deleteAllError } = await supabase
            .from('routine_routine_types')
            .delete()
            .eq('routine_id', routineId)

        if (deleteAllError) throw deleteAllError
    }

    // Upsert selected types — ignores rows that already exist instead of erroring
    if (routineTypeIds.length > 0) {
        const rows = routineTypeIds.map((typeId: number) => ({
            routine_id: routineId,
            routine_type_id: typeId
        }))

        const { error: joinTypeError } = await supabase
            .from('routine_routine_types')
            .upsert(rows, { onConflict: 'routine_id,routine_type_id', ignoreDuplicates: true })

        if (joinTypeError) {
            console.error('JOIN UPDATE ERROR:', joinTypeError)
            throw joinTypeError
        }
    }

    revalidatePath('/', 'layout')
    redirect('/history')
}

export async function deleteRoutine(routineId: number) {

    const supabase = await createClient()

    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        throw new Error('User not authenticated')
    }

    // routine_routine_types rows should cascade-delete automatically if you set
    // ON DELETE CASCADE on that foreign key in Supabase. If you haven't, delete
    // them manually here first — uncomment if you get a foreign key error:
    // await supabase.from('routine_routine_types').delete().eq('routine_id', routineId)

    const { error } = await supabase
        .from('routines')
        .delete()
}
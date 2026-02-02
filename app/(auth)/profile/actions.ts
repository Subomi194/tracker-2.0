
"use server";

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function saveProfile(formData: FormData) {

    console.log('SAVE PROFILE ACTION HIT')
    const supabase = await createClient()

    const name = formData.get("name") as string | null

    if (!name || name.trim().length === 0 ) {
        throw new Error("Name is required")
    }

    //get user_id from auth
    const {data:{user}} = await supabase.auth.getUser();

    if (!user) throw new Error("User not found")

    //insert user id and name into profiles
    const {error} = await supabase 
    .from('profiles')
    .upsert({
        id: user.id,
        name: name
    })
    .select()
    .single()

    if (error) throw error

    redirect("/")
}
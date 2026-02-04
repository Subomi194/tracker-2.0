
"use server";

import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache';

export async function saveProfile(formData: FormData) {

    console.log('SAVE PROFILE ACTION HIT')
    const supabase = await createClient()

    const name = formData.get("name") as string | null

    if (!name || name.trim().length === 0 ) {
        return { error: "Please enter your name."}
    }

    //get user_id from auth
    const {data:{user}} = await supabase.auth.getUser();

    if (!user) {
        redirect('/login')
    }

    //insert user id and name into profiles
    const {error} = await supabase 
    .from('profiles')
    .upsert({
        id: user.id,
        name,
    })
    if (error) {
    return { error: "Failed to save profile. Please try again." }
    }

    revalidatePath('/')

    redirect("/")
}
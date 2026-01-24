'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'



export async function signUp(formData: FormData) {

  console.log('SIGN UP ACTION HIT')
  const supabase = await createClient()




  // type-casting here for convenience
  // in practice, you should validate your inputs
  const credentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signUp({
    email: credentials.email, 
    password: credentials.password, 
  }) 

  console.log("sign up date", data)
  console.log("sign up error", error)

  if (error) {
    
    console.error(error)
   }
   
  if (data?.user?.identities?.length === 0) {
    console.error(error)
  }
  
  

  revalidatePath('/', 'layout')
  
}

export async function signIn(formData: FormData) {

  console.log('SIGN IN ACTION HIT')
  const supabase = await createClient()


  // type-casting here for convenience
  // in practice, you should validate your inputs
  const credentials = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signInWithPassword(credentials)

  console.log("sign in data", data)
  console.log("sign in error", error)

  if (error) {
    console.error(error)
  }

  revalidatePath('/', 'layout')
  redirect('/')

}

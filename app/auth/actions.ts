'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient} from '@/lib/supabase/server'
import { error } from 'console'

//export async function getUserSession() {

  //const supabase = await createClient();

  //const {data, error} = await supabase.auth.getUser();

  //if (error) {
  //  return null;
  //}

  //return {user: data?.user};

//}

export async function signUp(formData: FormData) {

  console.log('SIGN UP ACTION HIT')
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  
  const email = formData.get('email') as string
  const password= formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!email || !password || !confirmPassword) {
    return { error: 'Please fill in all fields.' }
  }


  if (password !== confirmPassword) {
    return { error: 'Passwords do not match.' }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/profile`,

    }
  }) 

  if (error) {
    if (error.message.includes('User already registered')) {
      return { error: 'An account with this email already exists.' }
    }

    return { error: 'Failed to create account. Please try again.' }
  }
   
  if (data?.user && !data.user.email_confirmed_at) {
    return {
      success: 'Check your email to confirm your account before signing in.',
    }
  }
  
}

export async function signIn(formData: FormData) {

  console.log('SIGN IN ACTION HIT')
  const supabase = await createClient()


  // type-casting here for convenience
  // in practice, you should validate your inputs

    const email= formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return { error: 'Please enter both email and password.' }
    }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // Friendly, non-technical messages
    if (error.message.includes('Invalid login credentials')) {
      return { error: 'INVALID_CREDENTIALS' }
    }

    if (error.message.includes('Email not confirmed')) {
      return { error: 'EMAIL_NOT_CONFIRMED', email, }
    }

    return { error: 'UNKNOWN_ERROR' }
  }

  revalidatePath('/', 'layout')
  return { success: 'Signed in successfully.' }

}

export async function resendConfirmation(email: string) {
  const supabase = await createClient()

  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
  })

  if (error) {
    return { error: 'Could not resend confirmation email.' }
  }

  return { success: 'Confirmation email sent. Please check your inbox.' }
}

export async function signOut() {

  const supabase = await createClient()

  const {error} = await supabase.auth.signOut();

  if (error) throw error

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function forgotPassword(formData: FormData) {

  const supabase = await createClient()
  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Please enter your email address.' }
  }

  const {error} = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/resetPassword`,
  })

  if (error) {
    console.error(error)
  }

  return {
    success:
      'If an account with that email exists, you will receive a password reset link.'
  }
}

export async function resetPassword(formData: FormData) {

  console.log('RESET PASSWORD ACTION HIT')
  const supabase = await createClient()

  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!password || !confirmPassword) {
    return { error: 'Please fill in both password fields.' }
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match.' }
  }

  const {error} = await supabase.auth.updateUser({password})

  if (error) {
    return { error: 'Reset link expired. Please request a new one.' }
  }

  redirect('/login')


}
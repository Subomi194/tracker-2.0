'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient as createAdminClient } from '@supabase/supabase-js'

import { createClient} from '@/lib/supabase/server'

export async function changePassword(formData: FormData) {

  console.log('change password ACTION HIT')

  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!password || !confirmPassword) {
    return { error: 'Please fill in both password fields.' }
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters.' }
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match.' }
  }

  const supabase = await createClient()
  const {error} = await supabase.auth.updateUser({password})

  if (error) {
    return { error: error.message }
  }

  return { success: 'Password updated successfully.' }

}

export async function deleteAccount() {
  console.log('delete account ACTION HIT')

  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()

  if (!user) return { error: 'Not logged in.' }

  // Admin client — needed to delete from Supabase Auth
  // Uses service role key (never expose this on the frontend)
  const adminClient = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // add this to your .env.local
  )

  const { error } = await adminClient.auth.admin.deleteUser(user.id)

   if (error) {
    return { error: error.message }
  }

  await supabase.auth.signOut()

  redirect('/login')
}
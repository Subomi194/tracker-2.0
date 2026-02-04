import React from 'react'
import {createClient} from '@/lib/supabase/server'
import { Hero } from '@/components'
import { UserProps } from '@/types/user'

export const dynamic = 'force-dynamic'

export default async function readProfile() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  console.log("SERVER USER:", user)
  if (!user) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('name')
    .eq('id', user.id)
    .single()

  return <Hero name={profile?.name}
  email={user.email} />
}

import React from 'react'
import {createClient} from '@/lib/supabase/server'
import SidebarUser from '@/components/ui/SidebarUser'

const readProfile = async () => {

    const supabase = await createClient()

    const {data: {user}, error} = await supabase.auth.getUser()
    if (!user) return null

    const {data: profiles, error: profileError} = await supabase
    .from('profiles')
    .select('name')
    .eq('id', user?.id)
    .single()

    if (error) {
        console.log(error);
    }

  return (
    <div>
        <SidebarUser 
        name={profiles?.name}
        email={user.email}
      />
    </div>
  )
}

export default readProfile
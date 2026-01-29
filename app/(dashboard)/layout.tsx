import Sidebar from '@/components/Sidebar'
import { createClient } from '@/lib/supabase/server'

export async function getUser () {

    const supabase = await createClient()
    
    const {data: {user}} = await supabase.auth.getUser()

    if (!user) {
        return null
    }

    return (
        <div>
            
            
        </div>
    )

}
import { createClient } from '@/lib/supabase/server'
import readProfile from '@/app/(onboarding)/profile/readProfile'
import SettingsHairProfile from '@/components/settings/SettingsHairProfile'
import SettingsNotification from '@/components/settings/SettingsNotification'

export default async function PersonalPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const data = await readProfile()

  return (
    <SettingsNotification
      
    />
  )
}
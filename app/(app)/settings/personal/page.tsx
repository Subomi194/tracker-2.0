import { createClient } from '@/lib/supabase/server'
import readProfile from '@/app/(onboarding)/profile/readProfile'
import SettingsProfile from '@/components/settings/SettingsProfile'
import { changeDisplayName } from '@/app/(onboarding)/profile/actions'

export default async function PersonalPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const data = await readProfile()

  return (
    <SettingsProfile
      email={data?.user.email ?? ''}
      name={data?.profile?.name ?? ''}
      changeDisplayName={changeDisplayName}
    />
  )
}
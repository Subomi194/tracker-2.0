import SettingsAccount from '@/components/settings/SettingsAccount'
import { changePassword, deleteAccount } from '../actions'

export default function AccountPage() {
  return (
    <SettingsAccount
      changePassword={changePassword}
      deleteAccount={deleteAccount}
    />
  )
}


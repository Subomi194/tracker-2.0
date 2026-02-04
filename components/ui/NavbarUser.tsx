import { UserProps } from '@/types/user'
import React from 'react'

const NavbarUser = ({ email}: UserProps) => {
  return (
    <div>
        <p>{email ?? "test@gmail.com"}</p>
    </div>
  )
}

export default NavbarUser
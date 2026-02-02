import { userProps } from '@/types/user'
import React from 'react'

const NavbarUser = ({ email}: userProps) => {
  return (
    <div>
        <p>{email ?? "test@gmail.com"}</p>
    </div>
  )
}

export default NavbarUser
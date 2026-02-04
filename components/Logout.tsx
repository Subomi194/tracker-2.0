import React, { useState } from 'react'
import SubmitButton from './ui/SubmitButton'
import { signOut } from '@/app/auth/actions';

const Logout = () => {

  return (
    <form action={signOut}>
        <SubmitButton title='Logout' btnType='submit'/>
    </form>
  )
}

export default Logout
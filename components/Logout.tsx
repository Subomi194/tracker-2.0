import React, { useState } from 'react'
import { signOut } from '@/app/auth/actions';

const Logout = () => {

  return (
    <form action={signOut}>
        <button type='submit' className='bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm hover:bg-rose-200 transition'>Logout</button>
    </form>
  )
}

export default Logout
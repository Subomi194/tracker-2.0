import React from 'react'
import { SignUpForm } from '@/components/sign-up-form'

const page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center ">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
   </div>
  )
}

export default page
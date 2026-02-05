"use client"

import { signUp } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"
import { useState } from "react"

export function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setMessage(null)
    setError(null)

    const result = await signUp(formData)

    if (result?.error) {
      setError(result.error)
    } 

    if (result?.success) {
      setMessage(result.success)
    }

  }

  return (
    <form action={handleSubmit} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full ">
          <div className="rounded-2xl hover:border-4 hover:border-rose-400/70 p-6 space-y-4">

            <div className="text-center space-y-2">
              <h2 className=" text-2xl font-bold text-rose-400">Hair Routine Tracker</h2>
              <h3 className=" text-xl font-semibold">Create Account</h3>
              <p className="font-medium text-gray-500">Start tracking your hair care journey today</p>
            </div>

            <div className="space-y-2 mb-4">
              <AuthInputs type="email" name="email" label="Email" required/>
              <AuthInputs type="password" name="password" label="Password" required/>
              <AuthInputs type="password" name="confirmPassword" label="Confirm Password" required/>
            </div>

            <SubmitButton btnType="submit" title="Sign Up"/>

            {message && (
              <p className="text-green-600 text-sm text-center mb-4">{message}</p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center mb-4">{error}</p>
            )}

            <p className="font-medium text-gray-500 text-center">Already have an account? 
              <a href="/login" className="text-rose-400 font-bold"> Sign In</a> 
            </p>

           
          </div>
        </div>
      </div>
      
    </form>
  )
}

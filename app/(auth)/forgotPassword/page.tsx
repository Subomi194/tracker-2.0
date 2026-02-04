"use client"

import { forgotPassword } from "@/app/auth/actions"
import AuthInputs from "@/components/ui/AuthInputs"
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react"

const page = () => {
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setMessage(null)
    setError(null)

    const result = await forgotPassword(formData)

    if (result?.error) {
      setError(result.error)
    } 

    if (result?.success) {
      setMessage(result.success)
    }
  }


  return (
    <form action={handleSubmit}  className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full ">
          <div className="rounded-2xl hover:border-4 hover:border-rose-400/70 p-6 space-y-4 h-full flex flex-col justify-center">

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Forgot your password?</h3>
              <p className="font-medium text-gray-500">Enter your email and we’ll send you a reset link.</p>
            </div>

            <div className="mb-4">
              <AuthInputs type="email" name="email" label="Email" required/>
            </div>

            <SubmitButton btnType="submit" title="Send reset link" containerStyles=""/>

            {message && (
              <p className="text-green-600 text-sm text-center mb-4">{message}</p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center mb-4">{error}</p>
            )}

           
          </div>
        </div>
      </div>
    </form>
  )
}      

export default page
"use client"

import { resetPassword } from "@/app/auth/actions"
import AuthInputs from "@/components/ui/AuthInputs"
import SubmitButton from "@/components/ui/SubmitButton"
import { useState } from "react"

export default function ResetPasswordContent() {

  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)

    const result = await resetPassword(formData)

    if (result?.error) {
      setError(result.error)
    } 
  }

  return (
    <form action={handleSubmit} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full ">
          <div className="rounded-2xl hover:border-4 hover:border-rose-400/70 p-6 space-y-4 h-full flex flex-col justify-center">

            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">Reset your password</h3>
              <p className="font-medium text-gray-500">Choose a new password below.</p>
            </div>

            <div className="space-y-2 mb-4">
              <AuthInputs type="password" name="password" label="New password" required/>
              <AuthInputs type="password" name="confirmPassword" label=" Confirm Password" required/>
            </div>

            <SubmitButton btnType="submit" title="Reset Password"/>

            {error && (
              <p className="text-red-600 text-sm text-center mb-4">{error}</p>
            )}

          </div>
        </div>
      </div>
    </form>
  )


}
"use client"
import { resendConfirmation, signIn } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"
import { useState } from "react"
import { useRouter } from 'next/navigation'


export function LoginForm() {

  const router = useRouter()
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [unconfirmedEmail, setUnconfirmedEmail] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setMessage(null)
    setError(null)

    const result = await signIn(formData)

    if (result?.error === 'EMAIL_NOT_CONFIRMED' && result.email) {
      setError('Your email isn’t confirmed.')
      setUnconfirmedEmail(result.email)
      return
    }
    
    if (result?.error === 'INVALID_CREDENTIALS') {
      setError('Incorrect email or password.')
      return
    }
    
    if (result?.error) {
      setError('Something went wrong. Please try again.')
    }

    if (result?.success) {
      setMessage(result.success)
      router.push('/')
    }
  }

  return (
    <form action={handleSubmit} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full ">
          <div className="rounded-2xl hover:border-4 hover:border-rose-400/70 p-6 space-y-4 h-full flex flex-col justify-center">

            <div className="text-center space-y-2">
              <h2 className=" text-2xl font-bold text-rose-400">Hair Routine Tracker</h2>
              <h3 className=" text-xl font-semibold">Welcome Back</h3>
              <p className="font-medium text-gray-500">Sign in to track your hair care journey</p>
            </div>

            <div className="space-y-2 mb-4">
              <AuthInputs type="email" name="email" label="Email" required/>
              <AuthInputs type="password" name="password" label="Password" required/>
            </div>

            <SubmitButton btnType="submit" title="Sign In"/>

            {message && (
              <p className="text-green-600 text-sm text-center mb-4">{message}</p>
            )}

            {error && (
              <div className="text-center space-y-2">
                <p className="text-red-600 text-sm">{error}</p>

                {unconfirmedEmail && (
                  <button
                    type="button"
                    onClick={async () => {
                      const res = await resendConfirmation(unconfirmedEmail)
                      if (res?.success) {
                        setMessage(res.success)
                        setUnconfirmedEmail(null)
                      }
                    }}
                    className="text-rose-400 font-semibold underline text-sm"
                  >
                    Resend confirmation email
                  </button>
                )}
              </div>
            )}
            
            <p className="font-medium text-gray-500 text-center">Don't have an account?
              <a href="/register" className="text-rose-400 font-bold"> Sign Up</a> 
            </p>

            <a href="/forgotPassword" className="text-rose-400 font-bold text-center">Forgot your password? </a>

           
          </div>
        </div>
      </div>
    </form>
  )
}      

"use client"
import { signIn } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"

export function LoginForm() {

  return (
    <form action={signIn} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full ">
          <div className="rounded-2xl
      hover:border-4 hover:border-rose-400/70
      p-6 space-y-4 h-full flex flex-col justify-center">

            <div className="text-center space-y-2">
              <h3 className="font-(--font-heading) text-xl font-semibold">Welcome Back</h3>
              <p className="font-medium text-gray-500">Sign in to track your hair care journey</p>
            </div>

            <div className="space-y-2 mb-4">
              <AuthInputs type="email" name="email" label="Email" required/>
              <AuthInputs type="password" name="password" label="Password" required/>
            </div>

            <SubmitButton btnType="submit" title="Sign In"/>

            <p className="font-medium text-gray-500 text-center">Don't have an account?
              <a href="/register" className="text-rose-400 font-bold"> Sign Up</a> 
            </p>

           
          </div>
        </div>
      </div>
    </form>
  )
}      

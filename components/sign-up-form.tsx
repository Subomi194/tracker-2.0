
"use client"
import { signUp } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"

export function SignUpForm() {

    

  return (
    <form action={signUp}>
        <AuthInputs type="email" name="email" label="Email"/>
        <AuthInputs type="password" name="password" label="Password"/>
        <AuthInputs type="password" label="Confirm Password"/>

        <SubmitButton btnType="submit" title="Sign Up"/>
    </form>
  )
}

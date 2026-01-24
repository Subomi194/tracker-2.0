"use client"
import { signIn } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"

export function LoginForm() {

    

  return (
    <form action={signIn}>
        <AuthInputs type="email" name="email" label="Email"/>
        <AuthInputs type="password" name="password" label="Password"/>

        <SubmitButton btnType="submit" title="Sign In"/>
    </form>
  )
}      

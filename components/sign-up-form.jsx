"use client";


"use client"
import { signUp } from "@/app/auth/actions"

export function SignUpForm() {
  return (
    <form action={signUp}>
      <input name="email" />
      <input name="password" type="password" />
      <button type="submit">Sign up</button>
    </form>
  )
}

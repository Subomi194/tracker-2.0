"use client"

import { signUp } from "@/app/auth/actions"
import AuthInputs from "./ui/AuthInputs"
import SubmitButton from "./ui/SubmitButton"
import { useState } from "react"

export function SignUpForm() {
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(formData: FormData) {
        setError(null)

        const result = await signUp(formData)

        if (result?.error) {
            setError(result.error)
        }
    }

    return (
        <form action={handleSubmit} className="rounded-4xl bg-rose-deep/70 p-2">
            <div className="rounded-[1.75rem] bg-blush-light/70 shadow-sm p-2 h-full">
                <div className="rounded-3xl bg-cream p-4 sm:p-2 h-full ">
                    <div className="rounded-2xl hover:border-4 hover:border-pink-accent/70 p-6 space-y-4">

                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-rose-deep">Hair Routine Tracker</h2>
                            <h3 className="text-xl font-semibold text-ink">Create Account</h3>
                            <p className="font-medium text-ink-muted">Start tracking your hair care journey today</p>
                        </div>

                        <div className="space-y-2 mb-4">
                            <AuthInputs type="email" name="email" label="Email" required/>
                            <AuthInputs type="password" name="password" label="Password" required/>
                            <AuthInputs type="password" name="confirmPassword" label="Confirm Password" required/>
                        </div>

                        <SubmitButton btnType="submit" title="Sign Up"/>

                        {error && (
                            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
                        )}

                        <p className="font-medium text-ink-muted text-center">Already have an account?
                            <a href="/login" className="text-pink-accent font-bold"> Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    )
}

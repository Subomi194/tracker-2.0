'use client'

import { useSearchParams } from "next/navigation"

export default function AuthErrorContent() {
    const searchParams = useSearchParams()
      const type = searchParams.get("type")
    
      return (
        <div className="flex min-h-screen items-center justify-center">
          <div className="max-w-md text-center space-y-4">
            <h1 className="text-xl font-semibold">
              {type === 'reset' ? 'Reset link expired' : 'Link expired or invalid'}
            </h1>
    
            <p className="text-gray-500">
              {type === 'reset'
                ? 'This password reset link is no longer valid. Please request a new one.'
                : 'Your confirmation link has expired. You can request a new one below.'}
            </p>
    
            <a
              href={type === 'reset' ? '/forgotPassword' : '/login'}
              className="text-rose-500 font-medium underline"
            >
              {type === 'reset'
                ? 'Request a new reset link'
                : 'Sign in to resend confirmation'}
            </a>
          </div>
        </div>
    )
}
    
    
    
      
    
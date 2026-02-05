// app/(auth)/auth-error/page.tsx

'use client'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-xl font-semibold">
          Link expired or invalid
        </h1>

        <p className="text-gray-500">
          This link is no longer valid. It may have expired or already been used.
        </p>

        <a
          href="/login"
          className="text-rose-500 font-medium"
        >
          Go back to sign in
        </a>
      </div>
    </div>
  )
}



  

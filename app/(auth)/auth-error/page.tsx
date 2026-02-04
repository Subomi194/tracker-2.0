// app/(auth)/auth-error/page.tsx

'use client'
export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import ErrorContent from './errorContent'




export default function Page() {
  return (

    <Suspense fallback={<div className="min-h-screen" />}>
      <ErrorContent/>
    </Suspense>
  )
}



  

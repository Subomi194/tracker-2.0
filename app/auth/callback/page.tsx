import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function AuthCallback({searchParams,
}: {
  searchParams: { code?: string }
}) {
  const code = searchParams.code

  if (!code) {
    redirect('/auth-error')
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    redirect('/auth-error')
  }

  redirect('/profile')
}
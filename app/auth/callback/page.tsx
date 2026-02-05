import { createClient } from "@/lib/supabase/server"
import { type EmailOtpType } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

export default async function AuthCallback({searchParams,
}: {
  searchParams: {
    token_hash?: string
    type?: EmailOtpType
  }
}) {
  const { token_hash, type } = searchParams
 
  if (!token_hash || !type) {
    redirect("/auth-error")
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.verifyOtp({
    token_hash,
    type,
  })

  if (error) {
    redirect("/auth-error")
  }

  redirect("/profile")
}
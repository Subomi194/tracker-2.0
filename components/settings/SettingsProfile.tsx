"use client"

import { useState, useTransition } from 'react'

type SettingsProfileProps = {
  email: string
  name: string
  changeDisplayName: (formData: FormData) => Promise<{ error?: string; success?: string } | void>
}

export default function SettingsProfile({ email, name, changeDisplayName }: SettingsProfileProps) {
  const [displayName, setDisplayName] = useState(name)
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setMessage(null)

    startTransition(async () => {
      const result = await changeDisplayName(formData)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else if (result?.success) {
        setMessage({ type: 'success', text: result.success })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Avatar + current info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-rose-300 flex justify-content-center items-center justify-center text-white text-xl font-bold shrink-0">
          {name?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{displayName || name}</p>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Feedback message */}
      {message && (
        <div className={`text-sm px-4 py-3 rounded-xl ${
          message.type === 'error'
            ? 'bg-red-50 text-red-500 border border-red-100'
            : 'bg-green-50 text-green-600 border border-green-100'
        }`}>
          {message.text}
        </div>
      )}

      {/* Display name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Display name
        </label>
        <input
          name="name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
        />
      </div>

      {/* Email — read only */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Email address
        </label>
        <input
          value={email}
          disabled
          className="w-full border border-gray-100 rounded-xl px-4 py-2.5 text-sm text-gray-400 bg-gray-50 cursor-not-allowed"
        />
        <p className="text-xs text-gray-400">Email cannot be changed here.</p>
      </div>

      {/* Save */}
      <button
        type="submit"
        disabled={isPending}
        className="bg-rose-400 hover:bg-rose-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition disabled:opacity-50"
      >
        {isPending ? 'Saving...' : 'Save changes'}
      </button>

    </form>
  )
}
"use client"

import { useState } from 'react'

type SettingsProfileProps = {
  email: string
  name: string
}

export default function SettingsProfile({ email, name }: SettingsProfileProps) {
  const [displayName, setDisplayName] = useState(name)

  return (
    <div className="space-y-6">

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-rose-300 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {name?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-400">{email}</p>
          <button className="text-xs text-rose-400 mt-1 hover:underline">
            Change avatar
          </button>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Display name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Display name
        </label>
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
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
      <div className="pt-2">
        <button className="bg-rose-400 hover:bg-rose-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition">
          Save changes
        </button>
      </div>

    </div>
  )
}
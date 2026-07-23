"use client"

import { useState, useTransition } from 'react'

type SettingsAccountProps = {
  changePassword: (formData: FormData) => Promise<{ error?: string; success?: string } | void>
  deleteAccount: () => Promise<{ error?: string } | void>
}

export default function SettingsAccount({ changePassword, deleteAccount }: SettingsAccountProps) {
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setMessage(null)

    startTransition(async () => {
      const result = await changePassword(formData)
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      } else if (result?.success) {
        setMessage({ type: 'success', text: result.success })
        setShowPasswordForm(false)
      }
    })
  }

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteAccount()
      if (result?.error) {
        setMessage({ type: 'error', text: result.error })
      }
    })
  }

  return (
    <div className="space-y-2">

      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-1 mb-3">
        Account
      </p>

      {/* Global message */}
      {message && (
        <div className={`text-sm px-4 py-3 rounded-xl mb-2 ${
          message.type === 'error'
            ? 'bg-red-50 text-red-500 border border-red-100'
            : 'bg-green-50 text-green-600 border border-green-100'
        }`}>
          {message.text}
        </div>
      )}

      {/* Change password row */}
      <button
        onClick={() => setShowPasswordForm(!showPasswordForm)}
        className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition text-left group border border-gray-100"
      >
        <div>
          <p className="text-sm font-semibold text-gray-800">Change password</p>
          <p className="text-xs text-gray-400 mt-0.5">Update your login credentials</p>
        </div>
        <i className={`ti ${showPasswordForm ? 'ti-chevron-up' : 'ti-chevron-right'} text-gray-300 group-hover:text-gray-500 transition`} aria-hidden="true" />
      </button>

      {/* Password form — expands inline */}
      {showPasswordForm && (
        <form onSubmit={handlePasswordSubmit} className="px-4 py-4 border border-gray-100 rounded-xl bg-gray-50 space-y-3">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
              New password
            </label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              placeholder="Min. 6 characters"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
              Confirm new password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Repeat new password"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
            />
          </div>
          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowPasswordForm(false)}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="flex-1 py-2.5 rounded-xl bg-rose-400 text-white text-sm font-semibold hover:bg-rose-500 transition disabled:opacity-50"
            >
              {isPending ? 'Saving...' : 'Update password'}
            </button>
          </div>
        </form>
      )}

      <hr className="border-gray-100 my-2" />

      {/* Delete account */}
      {!showDeleteConfirm ? (
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-red-50 transition text-left group border border-red-100"
        >
          <div>
            <p className="text-sm font-semibold text-red-500">Delete account</p>
            <p className="text-xs text-red-300 mt-0.5">Permanently remove your account and all data</p>
          </div>
          <i className="ti ti-trash text-red-300 group-hover:text-red-400 transition" aria-hidden="true" />
        </button>
      ) : (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 space-y-3">
          <p className="text-sm font-semibold text-red-600">Are you absolutely sure?</p>
          <p className="text-xs text-red-400 leading-relaxed">
            This will permanently delete your account and every routine entry you've logged. This cannot be undone.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-white transition"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition disabled:opacity-50"
            >
              {isPending ? 'Deleting...' : 'Yes, delete'}
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
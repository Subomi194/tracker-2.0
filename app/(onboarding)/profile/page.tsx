"use client";

import { AddInputs } from '@/components'
import { saveProfile } from './actions'
import SubmitButton from '@/components/ui/SubmitButton'
import { useState } from 'react';

const Page = () => {

    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(formData: FormData) {
        setError(null)

        const result = await saveProfile(formData)

        if (result?.error) {
            setError(result.error)
        }
    }

    return (
        <form action={handleSubmit} className="flex min-h-svh w-full items-center justify-center px-4 pt-10 sm:items-center sm:pt-0">
            <div className="w-full max-w-md">
                <div className="rounded-4xl bg-rose-deep/70 p-2">
                    <div className="rounded-[1.75rem] bg-blush-light/70 shadow-sm p-2 h-full">
                        <div className="rounded-3xl bg-cream p-4 sm:p-2 h-full">
                            <div className="rounded-2xl hover:border-4 hover:border-pink-accent/70 p-6 space-y-4 ">

                                <h2 className="text-2xl font-bold text-rose-deep">Hair Routine Tracker</h2>
                                <h1 className="text-xl font-semibold text-center text-ink">Complete your profile</h1>

                                <div className='space-y-4 mb-4'>

                                    <AddInputs
                                        label="Name"
                                        type="text"
                                        name='name'
                                    />

                                    {error && (
                                        <p className="text-red-600 text-sm text-center">{error}</p>
                                    )}

                                    <SubmitButton
                                        title="Save"
                                        btnType="submit"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Page

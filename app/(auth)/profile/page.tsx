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
    <form action={handleSubmit} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full">
          <div className="rounded-2xl hover:border-4 hover:border-rose-400/70 p-6 space-y-4 h-full flex flex-col justify-center">
              
              <h1 className=" text-xl font-semibold text-center">Complete your profile</h1>

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
    </form>
  )
}

export default Page

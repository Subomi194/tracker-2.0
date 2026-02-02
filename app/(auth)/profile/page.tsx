"use client";

import { AddInputs } from '@/components'
import { saveProfile } from './actions'
import SubmitButton from '@/components/ui/SubmitButton'

const Page = () => {
  
  return (
    <form action={saveProfile} className="rounded-4xl bg-rose-400/70 p-2">
      <div className="rounded-[1.75rem] bg-rose-100/70 shadow-sm p-2 h-full">
        <div className="rounded-3xl bg-white p-4 sm:p-2 h-full">
          <div className="rounded-2xl
      hover:border-4 hover:border-rose-400/70
      p-6 space-y-4 h-full flex flex-col justify-center">
              
              <h1 className="font-(--font-heading) text-xl font-semibold text-center">Complete your profile</h1>

                <div className='space-y-4 mb-4'>

                  <AddInputs
                    label="Name"
                    type="text"
                    name='name'
                  />

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

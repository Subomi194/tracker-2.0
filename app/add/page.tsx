import React from 'react'
import AddInputs from '@/components/ui/AddInputs'
import AddTextarea from '@/components/ui/AddTextarea'
import { CustomButton } from '@/components'
import Header from '@/components/ui/Header'

const page = () => {
  return (
    <form action=""className=''>
      <div className='max-w-360 mx-auto '>
        <Header title='Add New Routine' description='Fill in the details of your new routine'/>
        


        <div className='p-6'>
          <div className='border p-6 rounded-lg'>
            <h3>Routine Details</h3>
            
            <p>Routine Types</p>

            <AddInputs type='text' placeholder='Date' label='Date' value='' customStyles=''/>

            <AddInputs type='text' placeholder='Date' label='Products Used' value='' customStyles=''/>

            <AddTextarea label='Notes' placeholder='How was your routine?' rows= {4} value='' customStyles=''/>

            <CustomButton title='Add Routine' containerStyles='bg-black text-white rounded-2xl mt-10 w-full'/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default page
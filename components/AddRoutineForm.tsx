"use client";

import { useState } from 'react'
import AddInputs from '@/components/ui/AddInputs'
import AddTextarea from '@/components/ui/AddTextarea'
import { CustomButton } from '@/components'
import { addRoutine } from '@/app/add/actions';
import AddProducts from './AddProducts';



type RoutineType = {
    id: number;
    name: string;
}

const AddRoutineForm = ({routineTypes}: {routineTypes: RoutineType[]}) => {
    const [selectedTypes, setSelectedTypes] = useState<number[]>([])

    const handleTypeChange = (id: number, checked: boolean) => {
        setSelectedTypes((prev) => {
          if (checked) {
            return prev.includes(id) ? prev : [...prev, id];
          } else {
            return prev.filter((typeId) => typeId !== id);
    
          }
        })
    }

    return (
        <form action={addRoutine} className=''>
        
            <div className='p-6'>
              <div className='border p-6 rounded-lg bg-white shadow-xl'>
                <h3 className='font-bold'>Routine Details</h3>
                <h4 className=' text-gray-500'>Fill in the details of your hair routine</h4>
                
                <p className='text-base font-semibold mb-1'>Routine Types</p>

                <input type="hidden" name='routine_type_ids' value={JSON.stringify(selectedTypes)}  />
    
                {routineTypes?.map((type) => (
                  <div key={type.id}>
                    <input type='checkbox'  checked={selectedTypes.includes(type.id)} 
                    onChange={(e) => handleTypeChange(type.id, e.target.checked)} />
                    {type.name}
                  </div>
                ))}
    
                <AddInputs type='date' name='date' label='Date' customStyles=''/>
    
                <AddProducts/>

                <AddTextarea label='Notes' name='notes' placeholder='How did your hair feel? Any observations?' rows= {2} customStyles=''/>
    
                <CustomButton title='Add Routine' btnType="submit" containerStyles='bg-black text-white rounded-2xl mt-10 w-full'/>
              </div>
            </div>
        </form>
      )
}


export default AddRoutineForm
"use client";

import { useState } from 'react'
import AddInputs from '@/components/ui/AddInputs'
import AddTextarea from '@/components/ui/AddTextarea'
import { CustomButton } from '@/components'
import { addRoutine } from '@/app/(app)/add/actions';
import AddProducts from './AddProducts';
import Modal from './ui/Modal';
import { LuBadgeInfo } from "react-icons/lu";
import formatDate from '@/lib/utils/formatDate';




type RoutineType = {
    id: number;
    name: string;
}

const AddRoutineForm = ({routineTypes}: {routineTypes: RoutineType[]}) => {
    const [selectedTypes, setSelectedTypes] = useState<number[]>([])
    const [activeRoutineType, setActiveRoutineType] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resetKey, setResetKey] = useState(0)

    async function handleSubmit(formData: FormData) {

        await addRoutine(formData)
        setResetKey(prev => prev + 1)
    }

    const handleTypeChange = (id: number, checked: boolean) => {
        setSelectedTypes((prev) => {
          if (checked) {
            return prev.includes(id) ? prev : [...prev, id];
          } else {
            return prev.filter((typeId) => typeId !== id);

          }
        })
    }

    const onClose = () => setIsModalOpen(false);

    return (
        <form action={handleSubmit} className=''>
        
            <div className=' py-6 md:px-40 md:py-6 '>
              <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-xl'>
                <h3 className='font-bold'>Routine Details</h3>
                <h4 className=' text-gray-500 mb-4'>Fill in the details of your hair routine</h4>
                
                <div className='space-y-3'>

                <p className='text-base font-semibold mb-1'>Routine Types</p>

                <div className='space-y-0.5'>
                  <input type="hidden" name='routine_type_ids' value={JSON.stringify(selectedTypes)}  />
                  {routineTypes?.map((type) => (
                    <div key={type.id} className='flex gap-2 '>
                      <input type='checkbox' className='accent-rose-500 ' checked={selectedTypes.includes(type.id)} 
                      onChange={(e) => handleTypeChange(type.id, e.target.checked)} />
                      <p>{type.name}</p>
                      <div></div>
                      
                      <button onClick={() => {
                        setActiveRoutineType(type.name);
                        setIsModalOpen(true);
                      }}> 
                      <LuBadgeInfo />
                      </button>

                    </div>
                  ))}
                </div>
                
                {
                  isModalOpen && 
                  <Modal routineType={activeRoutineType} onClose={onClose} />
                }

                <AddInputs type='date' name='date' label='Date' required customStyles='hover:bg-rose-300 hover:text-rose-900'/>
    
                <AddProducts key={resetKey}/>

                <AddTextarea label='Notes' name='notes' placeholder='How did your hair feel? Any observations?' rows= {2} customStyles=''/>
    
                <CustomButton title='Add Routine' btnType="submit" containerStyles='mt-2'/>
                </div>
              </div>
            </div>
        </form>
      )
}


export default AddRoutineForm
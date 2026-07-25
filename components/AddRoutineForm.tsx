"use client";

import { useState } from 'react'
import AddInputs from '@/components/ui/AddInputs'
import AddTextarea from '@/components/ui/AddTextarea'
import { CustomButton } from '@/components'
import { addRoutine, updateRoutine } from '@/app/(app)/add/actions';
import AddProducts from './AddProducts';
import Modal from './ui/Modal';
import { LuBadgeInfo } from "react-icons/lu";
import {shortFormatDate} from '@/lib/utils/formatDate';

type RoutineType = {
    id: number;
    name: string;
}

type InitialData = {
    id: number;
    date: string;
    notes: string;
    products: string[];
    routineTypeIds: number[];
}

const AddRoutineForm = ({routineTypes, initialData}: {routineTypes: RoutineType[], initialData?: InitialData | null}) => {
    const isEditing = !!initialData

    const [selectedTypes, setSelectedTypes] = useState<number[]>(initialData?.routineTypeIds ?? [])
    const [activeRoutineType, setActiveRoutineType] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resetKey, setResetKey] = useState(0)

    async function handleSubmit(formData: FormData) {
        if (isEditing) {
            await updateRoutine(initialData!.id, formData)
        } else {
            await addRoutine(formData)
            setResetKey(prev => prev + 1)
        }
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
        <form action={handleSubmit}>

            <div className='w-full max-w-2xl mx-auto px-4 md:px-8 py-6'>
              <div className='border border-blush-border p-6 rounded-2xl bg-white shadow-xl'>

                <div className='space-y-3'>

                <p className='text-base font-semibold mb-1 text-ink'>Routine Types</p>

                <div className='flex flex-wrap gap-3'>
                  <input type="hidden" name='routine_type_ids' value={JSON.stringify(selectedTypes)}  />
                  <div className='flex flex-wrap gap-2'>
                    {routineTypes?.map((type) => {
                       const selected = selectedTypes.includes(type.id);

                       return (
                        <button key={type.id} type='button'
                          onClick={() =>
                            handleTypeChange(type.id, !selected)
                          }
                          className={`
                            rounded-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            transition-colors
                            ${
                              selected
                                ? "bg-pink-accent text-cream"
                                : "bg-blush-light text-rose-deep border border-blush-border"
                            }
                          `}
                        >
                          {type.name}
                        </button>
                       );
                      })}

                  </div>
                </div>

                {
                  isModalOpen &&
                  <Modal routineType={activeRoutineType} onClose={onClose} />
                }

                <AddInputs
                  type='date'
                  name='date'
                  label='Date'
                  required
                  defaultValue={initialData?.date}
                  customStyles='focus:border-pink-accent focus:ring-blush-light'
                />

                <AddProducts key={resetKey} initialProducts={initialData?.products} routineTypeIds={selectedTypes}/>

                <AddTextarea
                  label='Notes'
                  name='notes'
                  placeholder='How did your hair feel? Any observations?'
                  rows={2}
                  defaultValue={initialData?.notes}
                  customStyles=''
                />

                <CustomButton title={isEditing ? 'Update Routine' : 'Add Routine'} containerStyles='mt-2'/>
                </div>
              </div>
            </div>
        </form>
      )
}

export default AddRoutineForm
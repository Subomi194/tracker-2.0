"use client"

import { routineTypeDescriptions } from "@/data/RoutineTypeDescription"
import { useState } from "react"

type ModalProps = {
    routineType: string
    onClose: () => void
}

const Modal = ({routineType, onClose}: ModalProps) => {

    

  return (
    <div className="">

        <div className="">
            <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center animate-in fade-in zoom-in-95 px-6 py-4">

                <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                    <h2 className="relative text-xl font-bold mb-4">{routineType}</h2>
                    <p>{routineType && routineTypeDescriptions[routineType]}</p>
                    <button 
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default Modal
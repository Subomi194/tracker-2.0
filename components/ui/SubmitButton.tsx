import React from 'react'

import { CustomButtonProps } from '../../types'

const SubmitButton = ({title, containerStyles, btnType, loading, onClick}: CustomButtonProps ) => {
  return (
    <button
        disabled={loading}
        type={btnType || "button"}
        onClick={onClick}
        className={`
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black"
            } text-white font-medium rounded-lg border border-black py-2 w-full 
            hover:bg-rose-400 hover:border-0 hover:text-black
             transition duration-300 ease-in-out cursor-pointer ${containerStyles}`}
    >
        <span className={`flex-1`}>
            {loading ? "Loading..." : title}
        </span>

    </button>
  )
}

export default SubmitButton
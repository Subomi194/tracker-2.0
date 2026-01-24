import React from 'react'

import { CustomButtonProps } from '../../types'

const SubmitButton = ({title, containerStyles, btnType, loading}: CustomButtonProps ) => {
  return (
    <button
        disabled={loading}
        type={btnType || "button"}
        className={`
            ${loading ? "bg-gray-400" : "bg-black"
            } text-white rounded-lg border border-black py-3 w-full ${containerStyles}`}
    >
        <span className={`flex-1`}>
            {loading ? "Loading..." : title}
        </span>

    </button>
  )
}

export default SubmitButton
"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '../../types'
import Link from 'next/link'

const CustomButton = ({title, href, containerStyles, onClick, btnType}: CustomButtonProps ) => {

  if (href) {
    return (
      <Link href={href} 
      className={`text-white font-medium rounded-lg border border-black py-2 px-4 w-full 
        hover:bg-rose-300 hover:border-0 hover:text-black
         transition duration-300 ease-in-out cursor-pointer bg-black ${containerStyles}`}
      >
        {title}
      </Link>
    )
  }
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`text-white font-medium rounded-lg border border-black py-2 w-full 
            hover:bg-rose-300 hover:border-0 hover:text-black
             transition duration-300 ease-in-out cursor-pointer bg-black ${containerStyles}`}
        onClick={onClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton
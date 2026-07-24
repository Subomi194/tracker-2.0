"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'
import { LuLoader } from "react-icons/lu"

type CustomButtonProps = {
  title: string
  loadingTitle?: string
  containerStyles?: string
}

const CustomButton = ({ title, loadingTitle, containerStyles }: CustomButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className={`text-cream font-medium rounded-lg border border-rose-deep py-2 w-full
        hover:bg-rose-mid hover:border-rose-mid
        transition duration-300 ease-in-out cursor-pointer bg-rose-deep
        disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-rose-deep
        flex items-center justify-center gap-2
        ${containerStyles}`}
    >
      {pending && <LuLoader className="w-4 h-4 animate-spin" />}
      <span>{pending ? (loadingTitle ?? `${title}...`) : title}</span>
    </button>
  )
}

export default CustomButton
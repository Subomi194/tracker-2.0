"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '../../types'
import Link from 'next/link'

const CustomButton = ({title, href, loading, containerStyles, onClick, btnType}: CustomButtonProps ) => {

    if (href) {
        return (
            <Link href={href}
                className={`text-cream font-medium rounded-lg border border-rose-deep py-2 px-4 w-full
                hover:bg-rose-mid hover:border-rose-mid
                transition duration-300 ease-in-out cursor-pointer bg-rose-deep ${containerStyles}`}
            >
                {title}
            </Link>
        )
    }
    return (
        <button
            disabled={loading}
            type={btnType || "button"}
            className={`text-cream font-medium rounded-lg border border-rose-deep py-2 w-full
            hover:bg-rose-mid hover:border-rose-mid
            transition duration-300 ease-in-out cursor-pointer bg-rose-deep ${containerStyles}`}
            onClick={onClick}
        >
            <span className="flex-1">
                {title}
            </span>
        </button>
    )
}

export default CustomButton
"use client"

import CustomButton from './ui/CustomButton';
import { UserProps } from '@/types/user'

const Hero = ({name, email}: UserProps) => {

    console.log("HERO NAME:", name)
    console.log("HERO email:", email)

  return (
    <div className="mx-auto max-w-360 ">
        <div className=" pt-32 ">
            <h1 className="text-3xl font-semibold ">
                Hi <span >{name}</span>
            </h1>
            <p>{email}</p>

            <p >
                Welcome to your hair routine tracker
            </p>

            <p className='mb-6'>Ready to track your hair care journey?</p>

            <CustomButton 
                title="Add Routine"
                href='/add'
                containerStyles=""
            />       
        </div>
    </div>
  )
}

export default Hero;
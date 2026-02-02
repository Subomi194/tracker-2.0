"use Client"

import React from 'react';
import Image from 'next/image';
import CustomButton from './ui/CustomButton';
import { userProps } from '@/types/user'

const Hero = ({name, email}: userProps) => {
  return (
    <div className="mx-auto max-w-360 ">
        <div className=" pt-32 ">
            <h1 className="text-3xl font-semibold ">
                Hi <span>{name ?? "User"}</span>
            </h1>

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
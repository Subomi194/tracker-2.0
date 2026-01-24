"use Client"

import React from 'react';
import Image from 'next/image';
import CustomButton from './ui/CustomButton';

const Hero = () => {
  return (
    <div className="mx-auto max-w-360 relative z-0 flex flex-col gap-5 xl:flex-row">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="text-3xl font-semibold ">
                Hi Subby
            </h1>

            <p>
                Welcome to your hair routine tracker
            </p>

            <CustomButton 
                title="Add Routine"
                containerStyles="bg-pink-400 text-white rounded-full mt-10"
                
            />       
        </div>
    </div>
  )
}

export default Hero;
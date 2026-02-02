"use client"

import React, { useState } from 'react'
import AddInputs from './ui/AddInputs'

const AddProducts = () => {
    const [input, setInput] = useState("")
    const [products, setProducts] = useState<string[]>([])

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
       
        if (!input.trim()) return
        if (products.includes(input.trim())) return

        if (products.some(p => p.toLowerCase() === input.trim().toLowerCase())) return

        setProducts(prev => [...prev, input.trim()])
        setInput("")



    }


  return (
    <div className=' '>
        <div className='flex gap-2'>
            <div className='flex-1'>
            <AddInputs type='text' placeholder='Enter product name' label='Products Used' required customStyles=''
            value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>

            <div className='mt-6'>
                <button 
                type='button' 
                onClick={handleAdd}
                className='border bg-black text-white rounded-2xl px-4 py-2 hover:bg-rose-200 hover:text-black'>
                     + 
                </button>
            </div>
        </div>

        <input
        type="hidden"
        name="products"
        value={JSON.stringify(products)}
        />

        <div className='flex gap-2 mt-2'>
            {products.map((product) => (
                <div key={product} className='bg-rose-100 border border-rose-300 rounded-full px-3 py-1 text-sm'>
                    {product}
                </div>
            ))}
        </div>
    </div>
  )
}

export default AddProducts
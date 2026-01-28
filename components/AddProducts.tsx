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
    <div>
        <div className='flex'>
            <AddInputs type='text' placeholder='products' label='Products Used' customStyles=''
            value={input} onChange={(e) => setInput(e.target.value)}/>
            <button 
            type='button' 
            onClick={handleAdd}
            className='border bg-black text-white p-4 rounded-2xl '> + </button>
        </div>

        <input
        type="hidden"
        name="products"
        value={JSON.stringify(products)}
        />

        <div>
            {products.map((product) => (
                <div key={product}>
                    {product}
                </div>
            ))}
        </div>
    </div>
  )
}

export default AddProducts
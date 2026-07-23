"use client"

import React, { useState } from 'react'
import AddInputs from './ui/AddInputs'

const AddProducts = ({ initialProducts = [] }: { initialProducts?: string[] }) => {
    const [input, setInput] = useState("")
    const [products, setProducts] = useState<string[]>(initialProducts)

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!input.trim()) return
        if (products.some(p => p.toLowerCase() === input.trim().toLowerCase())) return

        setProducts(prev => [...prev, input.trim()])
        setInput("")
    }

    return (
        <div>
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <AddInputs type='text' placeholder='Enter product name' label='Products Used' customStyles=''
                        value={input} onChange={(e) => setInput(e.target.value)}/>
                </div>

                <div className='mt-6'>
                    <button
                        type='button'
                        onClick={handleAdd}
                        className='border border-rose-deep bg-rose-deep text-cream rounded-2xl px-4 py-2 hover:bg-rose-mid hover:border-rose-mid transition'>
                        +
                    </button>
                </div>
            </div>

            <input
                type="hidden"
                name="products"
                value={JSON.stringify(products)}
            />

            <div className='flex flex-wrap gap-2 mt-2'>
                {products.map((product) => (
                    <button
                        type='button'
                        key={product}
                        onClick={() => setProducts(products.filter(p => p !== product))}
                        className='bg-blush-light border border-blush-border text-rose-deep rounded-lg px-3 py-1 text-sm gap-2 flex items-center'>
                        <span>{product}</span>
                        <span>×</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AddProducts
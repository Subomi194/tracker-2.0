"use client"

import React, { useState, useEffect } from 'react'
import AddInputs from './ui/AddInputs'
import { LuSparkles } from 'react-icons/lu'
import {getSuggestedProducts} from '@/app/(app)/products/actions'

type Suggestion = {
    id: string
    brand: string | null
    product_name: string
    category: string
    usageCount: number
}

type AddProductsProps = {
    initialProducts?: string[]
    routineTypeIds?: number[]
}

const AddProducts = ({ initialProducts = [], routineTypeIds = [] }: AddProductsProps) => {
    const [input, setInput] = useState("")
    const [products, setProducts] = useState<string[]>(initialProducts)
    const [suggestions, setSuggestions] = useState<Suggestion[]>([])

    useEffect(() => {
        let active = true

        if (routineTypeIds.length === 0) {
            setSuggestions([])
            return
        }

        getSuggestedProducts(routineTypeIds).then((results) => {
            if (active) setSuggestions(results)
        })

        return () => { active = false }
        // routineTypeIds.join(',') keeps this stable across renders —
        // a new array reference every render would otherwise refetch constantly
    }, [routineTypeIds.join(',')])

    const formatName = (s: Suggestion) => s.brand ? `${s.brand} ${s.product_name}` : s.product_name

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!input.trim()) return
        if (products.some(p => p.toLowerCase() === input.trim().toLowerCase())) return

        setProducts(prev => [...prev, input.trim()])
        setInput("")
    }

    const handleAddSuggestion = (suggestion: Suggestion) => {
        const name = formatName(suggestion)
        if (products.some(p => p.toLowerCase() === name.toLowerCase())) return
        setProducts(prev => [...prev, name])
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

            {suggestions.length > 0 && (
                <div className='mt-2 space-y-1.5'>
                    <p className='text-xs text-ink-muted flex items-center gap-1'>
                        <LuSparkles size={12} className='text-pink-accent' /> Frequently used for this routine
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        {suggestions.map((s) => {
                            const name = formatName(s)
                            const alreadyAdded = products.some(p => p.toLowerCase() === name.toLowerCase())
                            return (
                                <button
                                    key={s.id}
                                    type='button'
                                    disabled={alreadyAdded}
                                    onClick={() => handleAddSuggestion(s)}
                                    className={`text-sm rounded-full px-3 py-1 border transition ${
                                        alreadyAdded
                                            ? 'bg-blush-light/40 border-blush-border text-ink-muted/50 cursor-not-allowed'
                                            : 'bg-blush-light border-blush-border text-rose-deep hover:bg-pink-accent hover:text-cream hover:border-pink-accent'
                                    }`}
                                >
                                    {name}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}

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
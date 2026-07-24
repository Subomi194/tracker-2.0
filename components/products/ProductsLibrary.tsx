"use client"

import { useState } from 'react'
import { deleteProduct, ProductCategory } from '@/app/(app)/products/actions'
import AddProductLibrary from './AddProductsLibrary'
import { LuPencil, LuTrash2, LuPlus, LuSearch, LuTriangleAlert } from 'react-icons/lu'

type ProductRecord = {
    id: string
    brand: string | null
    product_name: string
    category: ProductCategory
    notes: string | null
}

const CATEGORY_LABELS: Record<ProductCategory, string> = {
    shampoo: 'Shampoo',
    conditioner: 'Conditioner',
    deep_conditioner: 'Deep Conditioner',
    pre_poo: 'Pre-poo',
    leave_in: 'Leave-in',
    oil: 'Oil',
    cream: 'Cream',
    curl_cream: 'Curl Cream',
    gel: 'Gel',
    mousse: 'Mousse',
    hair_mask: 'Hair Mask',
    other: 'Other',
}

const ProductsLibrary = ({ products }: { products: ProductRecord[] }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [showAdd, setShowAdd] = useState(false)
    const [editingProduct, setEditingProduct] = useState<ProductRecord | null>(null)

    const filtered = products.filter((p) => {
        if (!searchQuery) return true
        const q = searchQuery.toLowerCase()
        return (
            p.product_name.toLowerCase().includes(q) ||
            p.brand?.toLowerCase().includes(q)
        )
    })
    

    const needsReview = (p: ProductRecord) => !p.brand || p.category === 'other'

    return (
        
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-2xl font-semibold text-ink">Product Library</h1>
                <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-1.5 bg-rose-deep text-cream px-4 py-2 rounded-xl font-semibold hover:bg-rose-mid transition text-sm"
                >
                    <LuPlus size={16} /> Add Product
                </button>
            </div>

            <div className="relative ">
                <LuSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted" size={16} />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-blush-border bg-blush-light/40 focus:border-pink-accent focus:ring-4 focus:ring-blush-light focus:outline-none text-base"
                />
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-16 bg-blush-light/50 rounded-3xl border border-blush-border">
                    <p className="text-lg font-semibold text-ink">
                        {products.length === 0 ? 'No products yet' : 'No matches'}
                    </p>
                    <p className="text-ink-muted text-sm mt-1">
                        {products.length === 0
                            ? 'Products you log in a routine will appear here too'
                            : 'Try a different search'}
                    </p>
                </div>
            )}

            <div className="space-y-3">
                {filtered.map((product) => (
                    <div key={product.id} className="bg-cream border border-blush-border rounded-2xl p-4 group relative">
                        <div className="flex justify-between items-start gap-3">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="font-semibold text-ink truncate">
                                        {product.brand ? `${product.brand} — ${product.product_name}` : product.product_name}
                                    </p>
                                    {needsReview(product) && (
                                        <span className="flex items-center gap-1 text-xs text-pink-accent bg-blush-light border border-blush-border px-2 py-0.5 rounded-full shrink-0">
                                            <LuTriangleAlert size={11} /> Add details
                                        </span>
                                    )}
                                </div>
                                <span className="inline-block text-xs text-rose-deep bg-blush-light border border-blush-border px-2 py-0.5 rounded-full mt-1">
                                    {CATEGORY_LABELS[product.category]}
                                </span>
                                {product.notes && (
                                    <p className="text-sm text-ink-muted mt-2">{product.notes}</p>
                                )}
                            </div>

                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                <button
                                    onClick={() => setEditingProduct(product)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-rose-deep hover:bg-rose-deep hover:text-cream transition"
                                >
                                    <LuPencil size={14} />
                                </button>
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-pink-accent hover:bg-pink-accent hover:text-cream transition"
                                >
                                    <LuTrash2 size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showAdd && <AddProductLibrary onClose={() => setShowAdd(false)} />}
            {editingProduct && (
                <AddProductLibrary product={editingProduct} onClose={() => {
                    console.log("Clicked edit")
                     setEditingProduct(null)
                }} />
            )}
        </div>
    )
}

export default ProductsLibrary
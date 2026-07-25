"use client"

import { useState } from 'react'
import { deleteProduct, ProductCategory } from '@/app/(app)/products/actions'
import AddProductLibrary from './AddProductsLibrary'
import ProductsCard from './ProductsCard'
import { LuPencil, LuTrash2, LuPlus, LuSearch, LuTriangleAlert } from 'react-icons/lu'

type ProductRecord = {
    id: string
    brand: string | null
    product_name: string
    category: ProductCategory
    notes: string | null
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
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 overflow-x-hidden">

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1 ">
                    <LuSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted" size={16} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 pl-9 pr-3 py-2 rounded-lg border border-blush-border bg-blush-light/40 focus:border-pink-accent focus:ring-4 focus:ring-blush-light focus:outline-none text-base"
                    />
                </div>

                <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-1.5 bg-rose-deep text-cream px-3 sm:px-4 py-2 rounded-xl font-semibold hover:bg-rose-mid transition text-sm shrink-0"
                >
                    <LuPlus size={16} /> Add Product
                </button>
                
            </div>
            

            {/* Products grid */}
            {filtered.length === 0 && (
                <div className="text-center py-16 px-4 bg-blush-light/50 rounded-3xl border border-blush-border">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((product) => (
                    <ProductsCard 
                        key={product.id} 
                        product={product} 
                        onEdit={setEditingProduct}
                        onDelete={deleteProduct}
                    />   
                ))}
            </div>

            {showAdd && <AddProductLibrary onClose={() => setShowAdd(false)} />}
            {editingProduct && (
                <AddProductLibrary product={editingProduct} onClose={() => {
                     setEditingProduct(null)
                }} />
            )}
        </div>
    )
}

export default ProductsLibrary
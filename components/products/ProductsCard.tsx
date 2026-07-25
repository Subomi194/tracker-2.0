"use client"

import { useState } from 'react'
import { motion, PanInfo } from 'motion/react'
import { LuPencil, LuTrash2, LuTriangleAlert } from 'react-icons/lu'
import { ProductCategory } from '@/app/(app)/products/actions'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

type ProductRecord = {
    id: string
    brand: string | null
    product_name: string
    category: ProductCategory
    notes: string | null
}

type ProductCardProps = {
    product: ProductRecord
    onEdit: (product: ProductRecord) => void
    onDelete: (id: string) => void
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

const MAX_SWIPE = 140
const DISTANCE_THRESHOLD = MAX_SWIPE / 2
const VELOCITY_THRESHOLD = 500

const needsReview = (p: ProductRecord) => !p.brand || p.category === 'other'

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
    const [open, setOpen] = useState(false)
    const isMobile = useIsMobile()

    const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
        const shouldOpen =
            info.offset.x > DISTANCE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD
        setOpen(shouldOpen)
    }

    const closeSwipe = () => setOpen(false)

    return (
        <div className="relative min-w-0 rounded-2xl overflow-hidden">

            {/* Revealed underneath on mobile swipe */}
            <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-3 bg-blush-light md:hidden">
                <button
                    onClick={() => { onEdit(product); closeSwipe(); }}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-rose-deep text-cream"
                >
                    <LuPencil size={18} />
                </button>
                <button
                    onClick={() => { onDelete(product.id); closeSwipe(); }}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-pink-accent text-cream"
                >
                    <LuTrash2 size={18} />
                </button>
            </div>

            <motion.div
                className="min-w-0 bg-cream border border-blush-border rounded-2xl p-4 group relative hover:shadow-md transition-shadow"
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: MAX_SWIPE }}
                dragElastic={0.15}
                dragMomentum={false}
                animate={{ x: open ? MAX_SWIPE : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                onDragEnd={handleDragEnd}
            >
                <div className="flex justify-between items-start gap-2 mb-3">
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-ink truncate min-w-0">{product.product_name}</p>
                        {product.brand && <p className="text-sm text-[#7a6670]">{product.brand}</p>}

                        <div className="flex items-center gap-2 flex-wrap mt-1">
                            <span className="inline-block text-xs text-rose-deep bg-blush-light border border-blush-border px-2 py-0.5 rounded-full">
                                {CATEGORY_LABELS[product.category]}
                            </span>
                            {needsReview(product) && (
                                <span className="flex items-center gap-1 text-xs text-pink-accent bg-blush-light border border-blush-border px-2 py-0.5 rounded-full shrink-0">
                                    <LuTriangleAlert size={11} /> Add details
                                </span>
                            )}
                        </div>

                        {product.notes && (
                            <p className="text-sm text-ink-muted mt-2 wrap-break-words">{product.notes}</p>
                        )}
                    </div>

                    <div className="hidden md:flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                        <button
                            onClick={() => onEdit(product)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-rose-deep hover:bg-rose-deep hover:text-cream transition"
                        >
                            <LuPencil size={14} />
                        </button>
                        <button
                            onClick={() => onDelete(product.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-blush-light text-pink-accent hover:bg-pink-accent hover:text-cream transition"
                        >
                            <LuTrash2 size={14} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProductCard
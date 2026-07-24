"use client"

import { createProduct, updateProduct, ProductCategory } from '@/app/(app)/products/actions'
import AddInputs from '@/components/ui/AddInputs'
import AddTextarea from '@/components/ui/AddTextarea'
import SubmitButton from '@/components/ui/SubmitButton'

const CATEGORY_OPTIONS: { value: ProductCategory; label: string }[] = [
    { value: 'shampoo', label: 'Shampoo' },
    { value: 'conditioner', label: 'Conditioner' },
    { value: 'deep_conditioner', label: 'Deep Conditioner' },
    { value: 'pre_poo', label: 'Pre-poo' },
    { value: 'leave_in', label: 'Leave-in' },
    { value: 'oil', label: 'Oil' },
    { value: 'cream', label: 'Cream' },
    { value: 'curl_cream', label: 'Curl Cream' },
    { value: 'gel', label: 'Gel' },
    { value: 'mousse', label: 'Mousse' },
    { value: 'hair_mask', label: 'Hair Mask' },
    { value: 'other', label: 'Other' },
]

type ProductRecord = {
    id: string
    brand: string | null
    product_name: string
    category: ProductCategory
    notes: string | null
}

type AddProductLibraryProps = {
    product?: ProductRecord
    onClose: () => void
}

const AddProductLibrary = ({ product, onClose }: AddProductLibraryProps) => {
    const isEditing = !!product

    async function handleSubmit(formData: FormData) {
        if (isEditing) {
            await updateProduct(product!.id, formData)
        } else {
            await createProduct(formData)
        }
        onClose()

         console.log(product)
        console.log(isEditing)
    }

    return (
        <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg font-semibold text-ink">
                    {isEditing ? 'Edit Product' : 'Add Product'}
                </h2>

                <form action={handleSubmit} className="space-y-3">
                    <AddInputs
                        type="text"
                        name="brand"
                        label="Brand (optional)"
                        placeholder="e.g. Mielle"
                        defaultValue={product?.brand ?? ''}
                    />

                    <AddInputs
                        type="text"
                        name="product_name"
                        label="Product name"
                        placeholder="e.g. Hydrating Shampoo"
                        required
                        defaultValue={product?.product_name}
                    />

                    <div>
                        <label className="text-base font-semibold mb-1 text-ink block">Category</label>
                        <select
                            name="category"
                            defaultValue={product?.category ?? 'other'}
                            className="bg-blush-light/40 border border-blush-border focus:border-pink-accent focus:ring-4 focus:ring-blush-light rounded-lg p-2 w-full focus:outline-none text-base"
                        >
                            {CATEGORY_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <AddTextarea
                        label="Notes (optional)"
                        name="notes"
                        placeholder="Anything worth remembering about this product"
                        rows={2}
                        defaultValue={product?.notes ?? ''}
                        customStyles=""
                    />

                    <div className="flex gap-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 border border-blush-border text-ink-muted rounded-lg py-2 hover:bg-blush-light transition"
                        >
                            Cancel
                        </button>
                        <div className="flex-1">
                            <SubmitButton title={isEditing ? 'Save Changes' : 'Add Product'} btnType="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProductLibrary
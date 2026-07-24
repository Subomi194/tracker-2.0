import { createClient } from '@/lib/supabase/server'
import ProductsLibrary from "@/components/products/ProductsLibrary"
import { getProducts } from "./actions"

const page = async () => {
    const products = await getProducts()

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
            <ProductsLibrary products={products} />
        </div>
    )
}
export default page
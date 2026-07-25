import { createClient } from '@/lib/supabase/server'
import ProductsLibrary from "@/components/products/ProductsLibrary"
import { getProducts } from "./actions"

const page = async () => {
    const products = await getProducts()

    return (
        <div className="">
            <ProductsLibrary products={products} />
        </div>
    )
}
export default page
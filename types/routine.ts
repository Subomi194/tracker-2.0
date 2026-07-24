export type ProductCategory =
  | 'shampoo' | 'conditioner' | 'deep_conditioner' | 'pre_poo'
  | 'leave_in' | 'oil' | 'cream' | 'curl_cream' | 'gel'
  | 'mousse' | 'hair_mask' | 'other'

export type RoutineProduct = {
  id: string
  brand: string | null
  product_name: string
  category: ProductCategory
}

export type RoutineComponent = {
    id: number
    date: string
    notes: string
    routine_routine_types: {
        routine_types: {
            id: number
            name: string
        }
    }[]
    routine_products: {
        products: RoutineProduct
    }[]
}
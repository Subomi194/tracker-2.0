'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export type ProductCategory =
  | 'shampoo' | 'conditioner' | 'deep_conditioner' | 'pre_poo'
  | 'leave_in' | 'oil' | 'cream' | 'curl_cream' | 'gel'
  | 'mousse' | 'hair_mask' | 'other'

export async function getProducts() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', user.id)
    .order('brand', { ascending: true, nullsFirst: false })

  if (error) throw error
  return data
}

export async function createProduct(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')

  const brand = (formData.get('brand') as string)?.trim() || null
  const product_name = formData.get('product_name') as string
  const category = (formData.get('category') as ProductCategory) || 'other'
  const notes = (formData.get('notes') as string)?.trim() || null

  const { error } = await supabase
    .from('products')
    .insert({ user_id: user.id, brand, product_name, category, notes })

  if (error) throw error
  revalidatePath('/products')
}

export async function updateProduct(productId: string, formData: FormData) {
  console.log('EDIT PRODUCT ACTION HIT')
  const supabase = await createClient()

  const brand = (formData.get('brand') as string)?.trim() || null
  const product_name = formData.get('product_name') as string
  const category = (formData.get('category') as ProductCategory) || 'other'
  const notes = (formData.get('notes') as string)?.trim() || null

   const { data: { user } } = await supabase.auth.getUser()
   if (!user) throw new Error('User not authenticated')


  const { error } = await supabase
    .from('products')
    .update({ brand, product_name, category, notes })
    .eq('id', productId)
    .eq('user_id', user.id)

  if (error) {
    return { error: error.message }
  }
  revalidatePath('/products')
}

export async function deleteProduct(productId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId)
    .eq('user_id', user.id)

  if (error) throw error
  revalidatePath('/products')
}

// Called from the routine form. Reuses an existing product (matched
// case-insensitively on name + brand) or creates one — brand/category
// default to blank/'other' when only a name is given, by design.
export async function findOrCreateProduct(
  productName: string,
  brand: string | null = null,
  category: ProductCategory = 'other'
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')

  let query = supabase
    .from('products')
    .select('id')
    .eq('user_id', user.id)
    .ilike('product_name', productName)

  query = brand ? query.ilike('brand', brand) : query.is('brand', null)

  const { data: existing } = await query.maybeSingle()
  if (existing) return existing.id

  const { data: created, error } = await supabase
    .from('products')
    .insert({ user_id: user.id, brand, product_name: productName, category })
    .select('id')
    .single()

  if (error) throw error
  return created.id
}

// Pattern matching (Option 1 from earlier): given the routine types the
// user has selected on the Add Routine form, return the products they've
// used most often for those types — sorted by frequency, most-used first.
export async function getSuggestedProducts(routineTypeIds: number[]) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('User not authenticated')
  if (routineTypeIds.length === 0) return []

  const { data: matchingLinks, error: routineError } = await supabase
    .from('routine_routine_types')
    .select('routine_id, routines!inner(user_id)')
    .in('routine_type_id', routineTypeIds)
    .eq('routines.user_id', user.id)

  if (routineError) throw routineError

  const routineIds = [...new Set(matchingLinks.map((r) => r.routine_id))]
  if (routineIds.length === 0) return []

  const { data: usage, error: usageError } = await supabase
    .from('routine_products')
    .select('product_id, products(id, brand, product_name, category)')
    .in('routine_id', routineIds)

  if (usageError) throw usageError

  const counts = new Map<string, { product: any; count: number }>()
  for (const row of usage) {
    if (!row.products) continue
    const entry = counts.get(row.product_id)
    if (entry) entry.count++
    else counts.set(row.product_id, { product: row.products, count: 1 })
  }

  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(({ product, count }) => ({ ...product, usageCount: count }))
}
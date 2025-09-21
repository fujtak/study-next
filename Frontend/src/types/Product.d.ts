import type User from './User'

type ProductCategory = 'shoes' | 'clothes' | 'book'

type ProductCondition = 'new' | 'used'

type Product = {
  id: number
  category: ProductCategory
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: ProductCondition
  owner: User
}

export default Product
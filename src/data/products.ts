// src/data/products.ts
import type { Product } from '@/types/product'
import 傳統草芳香按摩油 from "@/assets/image/searchdata/傳統草芳香按摩油.jpg"

export const products: Product[] = [
  {
    id: 1,
    name: 'GPU Minyak Urut 60ml',
    price: 155,
    description: '傳統草芳香按摩油',
    image: 傳統草芳香按摩油
  },
  {
    id: 2,
    name: 'NVIDIA H100 80G',
    price: 499999,
    description: '企業級GPU',
    image: 'https://cf.shopee.tw/file/50ef39c030c7c6b5f9d511e4f92a2c2e'
  },
  {
    id: 3,
    name: 'Pocket AI 顯示卡',
    price: 16800,
    description: 'Thunderbolt可攜式GPU',
    image: 'https://cf.shopee.tw/file/cde17c764df373acdf27e5f90fbc013a'
  }
]

// src/data/products.ts
import type { Product } from '@/types/product'
import 傳統草芳香按摩油 from "@/assets/image/searchdata/傳統草芳香按摩油.jpg"
import NVIDIAH10080G from "@/assets/image/searchdata/NVIDIA H100 80G.jpg"
import PocketAI顯示卡 from "@/assets/image/searchdata/Pocket AI 顯示卡.jpg"
import iphone16promax from "@/assets/image/searchdata/iphone16promax.jpg"
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
    image: NVIDIAH10080G
  },
  {
    id: 3,
    name: 'Pocket AI 顯示卡',
    price: 16800,
    description: 'Thunderbolt可攜式GPU',
    image: PocketAI顯示卡
  },
    {
    id: 4,
    name: 'iphone 16 promax',
    price: 16800,
    description: 'iphone 16 promax',
    image: iphone16promax
  }
]

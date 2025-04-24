// src/data/products.ts
import type { Product } from '@/types/product'
import 傳統草芳香按摩油 from "@/assets/image/searchdata/傳統草芳香按摩油.jpg"
import NVIDIAH10080G from "@/assets/image/searchdata/NVIDIA H100 80G.jpg"
import PocketAI顯示卡 from "@/assets/image/searchdata/Pocket AI 顯示卡.jpg"
import iphone16promax from "@/assets/image/searchdata/iphone16promax.jpg"
import GalaxyS25Ultra5G from "@/assets/image/searchdata/Galaxy S25 Ultra 5G.jpg"
import ASUSROG華碩StrixG1616吋電競筆電黑色 from "@/assets/image/searchdata/ASUS ROG 華碩Strix G16 16吋電競筆電黑色.jpg"
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
    price: 43400,
    description: 'iphone 16 promax',
    image: iphone16promax
  },
  {
    id: 5,
    name: 'Galaxy S25 Ultra 5G',
    price: 39900,
    description: 'Galaxy S25 Ultra 5G',
    image: GalaxyS25Ultra5G
  },
  {
    id: 6,
    name: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    price: 69999,
    description: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    image: ASUSROG華碩StrixG1616吋電競筆電黑色
  },
  {
    id: 7,
    name: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    price: 69999,
    description: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    image: ASUSROG華碩StrixG1616吋電競筆電黑色
  },
  {
    id: 8,
    name: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    price: 69999,
    description: 'ASUS ROG 華碩Strix G16 16吋電競筆電黑色',
    image: ASUSROG華碩StrixG1616吋電競筆電黑色
  }
]

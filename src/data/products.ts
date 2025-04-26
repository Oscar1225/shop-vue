// src/data/products.ts
import type { Product } from '@/types/product'
import 傳統草芳香按摩油 from "@/assets/image/searchdata/傳統草芳香按摩油.jpg"
import NVIDIAH10080G from "@/assets/image/searchdata/NVIDIA H100 80G.jpg"
import PocketAI顯示卡 from "@/assets/image/searchdata/Pocket AI 顯示卡.jpg"
import iphone16promax from "@/assets/image/searchdata/iphone16promax.jpg"
import GalaxyS25Ultra5G from "@/assets/image/searchdata/Galaxy S25 Ultra 5G.jpg"
import ASUSROG華碩StrixG1616吋電競筆電黑色 from "@/assets/image/searchdata/ASUS ROG 華碩Strix G16 16吋電競筆電黑色.jpg"
import rogpghone9 from "@/assets/image/searchdata/rogphone9.png"
import VenturePro16AIA1VEG005TW商務筆電 from "@/assets/image/searchdata/VenturePro 16 AI A1VEG-005TW 商務筆電.jpg"
import 統一麵肉燥風味特大號 from "@/assets/image/searchdata/統一麵 肉燥風味特大號(5入).jpg"
import Kleenex舒潔頂級四層極絨厚抽取衛生紙90抽x48包 from "@/assets/image/searchdata/Kleenex 舒潔 頂級四層 極絨厚 抽取衛生紙 90抽x48包(四層衛生紙).jpg"
import rtx5090 from "@/assets/image/searchdata/ASUS 華碩ROG Astral GeForce RTX 5090 32GB GDDR7 OC 超頻版 顯示卡.jpg"
import rtx5080 from "@/assets/image/searchdata/GIGABYTE 技嘉RTX5080 GAMING OC 16G 顯示卡.jpg"
import rtx5070 from "@/assets/image/searchdata/rtx5070.jpg"
import rtx5060ti from "@/assets/image/searchdata/rtx5060 TI.jpg"
import ipadpro from "@/assets/image/searchdata/ipad pro.jpg"
import ipadair7 from "@/assets/image/searchdata/ipad air 7.jpg"
import 花香清潔袋中玫瑰天竺葵 from "@/assets/image/searchdata/花鄉清潔袋玫瑰.jpg"
import 花香清潔袋小佛手柑茶香 from "@/assets/image/searchdata/花香清潔袋小—佛手柑茶香.jpg"
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
    description: 'apple iphone 16 promax',
    image: iphone16promax
  },
  {
    id: 5,
    name: 'Galaxy S25 Ultra 5G',
    price: 39900,
    description: 'Galaxy S25 Ultra 5G/phone',
    image: GalaxyS25Ultra5G
  },
  {
    id: 6,
    name: 'ASUS 華碩 ROG Phone 9 Pro Edition 5G',
    price: 45990,
    description: 'ASUS 華碩 ROG Phone 9 Pro Edition 5G',
    image: rogpghone9
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
    name: 'VenturePro 16 AI A1VEG-005TW 商務筆電',
    price: 42900,
    description: 'VenturePro 16 AI A1VEG-005TW 商務筆電',
    image: VenturePro16AIA1VEG005TW商務筆電
  },
  {
    id: 9,
    name: '統一麵肉燥風味特大號(5入)',
    price: 85,
    description: '統一麵肉燥風味特大號(5入)',
    image: 統一麵肉燥風味特大號
  },
  {
    id: 10,
    name: 'Kleenex 舒潔 頂級四層 極絨厚 抽取衛生紙 90抽x48包(四層衛生紙)',
    price: 945,
    description: 'Kleenex 舒潔 頂級四層 極絨厚 抽取衛生紙 90抽x48包(四層衛生紙)',
    image: Kleenex舒潔頂級四層極絨厚抽取衛生紙90抽x48包
  },
  {
    id: 11,
    name: 'ASUS 華碩ROG Astral GeForce RTX 5090 32GB GDDR7 OC 超頻版 顯示卡',
    price: 212599,
    description: 'ASUS 華碩ROG Astral GeForce RTX 5090 32GB GDDR7 OC 超頻版 顯示卡',
    image: rtx5090
  },
  {
    id: 12,
    name: 'GIGABYTE 技嘉RTX5080 GAMING OC 16G 顯示卡',
    price: 65990,
    description: 'GIGABYTE 技嘉RTX5080 GAMING OC 16G 顯示卡',
    image: rtx5080
  },
  {
    id: 13,
    name: 'GIGABYTE 技嘉GeForce RTX5070 GAMING OC 12G 顯示卡',
    price: 24090,
    description: 'GIGABYTE 技嘉GeForce RTX5070 GAMING OC 12G 顯示卡',
    image: rtx5070
  },
  {
    id: 14,
    name: 'GIGABYTE 技嘉GeForce RTX5060 Ti WINDFORCE-16GD 顯示卡',
    price: 15590,
    description: 'GIGABYTE 技嘉GeForce RTX5060 Ti WINDFORCE-16GD 顯示卡',
    image: rtx5060ti
  },
  {
    id: 15,
    name: 'Apple 蘋果2024 iPad Pro 11吋 256G WiFi',
    price: 32290,
    description: 'Apple 蘋果2024 iPad Pro 11吋 256G WiFi',
    image: ipadpro
  },
  {
    id: 16,
    name: 'Apple 蘋果iPad Air 11吋 M3 256G WiFi',
    price: 23400,
    description: 'Apple 蘋果iPad Air 11吋 M3 256G WiFi',
    image: ipadair7
  },
  {
    id: 17,
    name: '花香清潔袋中-玫瑰天竺葵',
    price: 89,
    description: '花香清潔袋中-玫瑰天竺葵 全家/垃圾袋',
    image: 花香清潔袋中玫瑰天竺葵
  },
  {
    id: 18,
    name: '花香清潔袋小—佛手柑茶香',
    price: 79,
    description: '花香清潔袋小—佛手柑茶香 全家/垃圾袋',
    image: 花香清潔袋小佛手柑茶香
  },
]

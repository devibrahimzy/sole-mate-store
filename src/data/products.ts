import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "CloudRunner Elite",
    category: "Running",
    price: 189,
    image: product1,
    isNew: true,
    description: "Experience cloud-like comfort with our most advanced cushioning technology. Perfect for long-distance running and daily training.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Black", "White", "Red"],
  },
  {
    id: 2,
    name: "StreetForce Pro",
    category: "Basketball",
    price: 159,
    originalPrice: 199,
    image: product2,
    isSale: true,
    description: "Dominate the court with superior ankle support and responsive cushioning. Designed for explosive movements.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "US 13"],
    colors: ["White", "Black", "Blue"],
  },
  {
    id: 3,
    name: "AeroFlex Women's",
    category: "Running",
    price: 149,
    image: product3,
    isNew: true,
    description: "Lightweight and breathable, designed specifically for the female athlete. Features our FlexFoam technology.",
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9", "US 10"],
    colors: ["Pink", "White", "Purple"],
  },
  {
    id: 4,
    name: "TrailBlazer X",
    category: "Trail",
    price: 219,
    image: product4,
    description: "Conquer any terrain with aggressive traction and waterproof construction. Built for the adventurous spirit.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Brown", "Green", "Black"],
  },
  {
    id: 5,
    name: "Urban Stride",
    category: "Lifestyle",
    price: 129,
    image: product1,
    description: "From streets to office, versatile style meets all-day comfort. The perfect everyday sneaker.",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Gray", "White", "Navy"],
  },
  {
    id: 6,
    name: "SpeedBurst Racing",
    category: "Running",
    price: 249,
    originalPrice: 299,
    image: product2,
    isSale: true,
    description: "Engineered for speed. Carbon fiber plate technology for your fastest times yet.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Neon Yellow", "Black", "White"],
  },
  {
    id: 7,
    name: "CrossFit Champion",
    category: "Training",
    price: 169,
    image: product3,
    isNew: true,
    description: "Stable platform for lifting, flexible sole for agility work. The ultimate training companion.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Black", "Red", "Blue"],
  },
  {
    id: 8,
    name: "Retro Classic",
    category: "Lifestyle",
    price: 99,
    image: product4,
    description: "Timeless design meets modern comfort. A nostalgic tribute to the golden era of sneakers.",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["White/Red", "White/Blue", "All Black"],
  },
];

export const categories = [
  "All",
  "Running",
  "Basketball",
  "Trail",
  "Training",
  "Lifestyle",
];

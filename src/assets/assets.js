import S1 from "./S1.jpg";
import s2 from "./s2.jpg";
import s3 from "./s3.webp";
import s4 from "./s4.webp";
import j1 from "./j1.jpg";
import j2 from "./j2.jpg";
import j3 from "./j3.jpg";
import j4 from "./j4.jpg";


export const products = [
  {
    _id: "shirt001",
    name: "Premium Linen Shirt",
    description:
      "Premium quality lining shirt with a comfortable fit, perfect for casual and everyday wear.",
    price: 1499,
    image: [S1],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Linen",
    fit: "Regular Fit",
    stock: 20,
    bestseller: true,
  },

  {
    _id: "shirt002",
    name: "Classic Blue Linen Shirt",
    description:
      "A stylish blue linen shirt designed for a clean and comfortable everyday look.",
    price: 1599,
    image: [s2],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    fabric: "Linen",
    fit: "Regular Fit",
    stock: 15,
    bestseller: true,
  },

  {
    _id: "shirt003",
    name: "Relaxed Fit Cream Shirt",
    description:
      "Minimal cream shirt with a relaxed silhouette and premium soft fabric.",
    price: 1699,
    image: [s3],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    color: "Black",
    fabric: "Cotton",
    fit: "Relaxed Fit",
    stock: 12,
    bestseller: false,
  },

  {
    _id: "shirt004",
    name: "Premium White Shirt",
    description:
      "Clean and versatile white shirt with a premium finish for a sophisticated look.",
    price: 1799,
    image: [s4],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Cotton Linen",
    fit: "Regular Fit",
    stock: 18,
    bestseller: true,
  },
  {
    _id: "jogger001",
    name: "Premium Jogger",
    description:
      "Premium joggers designed for effortless comfort, style, and everyday movement.",
    price: 1129,
    image: [j1],
    category: "Men",
    subCategory: "Jogger",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Cotton Linen",
    fit: "Regular Fit",
    stock: 18,
   
  },
  {
    _id: "jogger002",
    name: "Stylish Jogger",
    description:
      "Comfortable joggers crafted for modern style, relaxed fits, and all-day comfort.",
    price: 1299,
    image: [j2],
    category: "Men",
    subCategory: "Jogger",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Cotton Linen",
    fit: "Regular Fit",
    stock: 18,
   
  },
  {
    _id: "jogger003",
    name: "New Jogger",
    description:
      "Elevated everyday joggers combining timeless style, soft comfort, and effortless versatility.",
    price: 1399,
    image: [j3],
    category: "Men",
    subCategory: "Jogger",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Cotton Linen",
    fit: "Regular Fit",
    stock: 18,
   
  },
  {
    _id: "jogger004",
    name: "New Look Jogger",
    description: "Refined joggers made for everyday comfort, clean looks, and effortless movement.",
    price: 1999,
    image: [j4],
    category: "Men",
    subCategory: "Jogger",
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    fabric: "Cotton Linen",
    fit: "Regular Fit",
    stock: 18,
   
  },

  
]
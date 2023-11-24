import {FC, useEffect, useState} from 'react'
import './App.css'
import Cart from "./components/Cart/Cart.tsx";
import axios from "axios";

export interface iProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
}
const API_URL = 'https://d8f72c3ec1be9c84.mokky.dev/products'
const App:FC = () => {
    const [products, setProducts] = useState<iProduct[]>([])

    useEffect(() => {
            const fethData = async () => {
                const {data} = await axios.get(API_URL)
                setProducts(data)
            }
            fethData()
    }, []);
  return (
    <>
      <Cart data={products} setData={setProducts}/>
    </>
  )
}

export default App

import React, {FC} from "react";
import {iProduct} from "../../App.tsx";
import CartItem from "../CartItem/CartItem.tsx";

interface iCartProps {
    data: iProduct[],
    setData: React.Dispatch<React.SetStateAction<iProduct[]>>
}

const Cart:FC<iCartProps> = (props) => {
const {data, setData} = props

    const increment = (id: number) => {
    const newData = [...data];
    const item = newData.find(item => item.id === id)

        if (item) {
            item.quantity++;
            setData(newData)
        }
}

    const decrement = (id: number) => {
        const newData = [...data];
        const item = newData.find(item => item.id === id)

        if (item) {
            item.quantity--;
            setData(newData)
        }
    }

    const removeItem = (id: number) => {
        const newData = [...data];
        setData(newData.filter((item) => item.id !== id))
    }

    return (
        <div>
            {data.map((product) => <CartItem key={product.id} item={product} decrement={decrement} increment={increment} removeItem={removeItem}/>)}
        </div>
    );
};

export default Cart;
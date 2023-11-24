import {FC} from "react";
import {iProduct} from "../../App.tsx";

export interface iCartItemProps {
    item: iProduct;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    removeItem: (id: number) => void;
}

const CartItem:FC<iCartItemProps> = (props) => {
    const {item, increment, removeItem, decrement} = props

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.quantity}</p>
            <p>{item.price}</p>

            <button onClick={() => increment(item.id)}>ADD MORE</button>
            <button
                disabled={item.quantity === 0}
                onClick={() => decrement(item.id)}
            >MINUS MORE</button>
            <button onClick={() => removeItem(item.id)}>REMOVE</button>
        </div>
    );
};

export default CartItem;
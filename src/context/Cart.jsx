import React, {useContext} from "react";
import { createContext } from "./cartContext";

const Cart = () => {

    const {productos} = useContext(productos)
    console.log(productos)

    return (
        <h1>carrito</h1>

    )
}

export default Cart;
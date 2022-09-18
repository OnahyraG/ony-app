import React, {useState, useEffect} from "react";
import productos from "../productMock";

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [productos, setProductos] = useState;
    const [productosQuantity, setProductosQuantity] = useState (0) ;


    
    const addItemCart = (productos) => {

    }

    const RemoveItem = (id) => {
        setProductos(productos.filter( productos => productos.id !==id ));
    }

    const clear = () => {
        setProductos([]);
        setProductosQuantity(0);
    }

    const isInCart = (id) =>{

    }

    return (
        <CartContext.Provider value={{addItemCart, RemoveItem,clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext}

export default CartProvider ;
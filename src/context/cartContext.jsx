import React, {useState, useEffect} from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    

    const cantidadDeProducts = () =>  {
        let cantidad = 0;
        products.forEach( producto => {
            cantidad += producto.cantidad
        });
        
        getProductsQuantity(cantidad);
    }

    useEffect( () => {

        cantidadDeProductos();
    }, [products]);
    

    const addItemCart = (producto) => {
        if(isInCart(producto.id)){
            const encontrado = products.find( prod => prod.id === producto.id);
            const productoEncontradoIndex = products.indexOf(encontrado);
            const productosAuxiliar = [...products];

            productosAuxiliar[productoEncontradoIndex].cantidad += producto.cantidad;
            setProducts(productosAuxiliar)

        } else {

            setProducts([...products, producto]);
        }
    }

    const RemoveItem = (id) => {
        setProducts(products.filter (producto => producto.id !== id)  );
        getProductsQuantity();
    }

    const clear = () => {
            setProducts([]);
            getProductsQuantity(0);
    }
    const getProductsQuantity = () => {
        let cantidad = 0;
        products.forEach( producto => {
            cantidad += producto.cantidad
        });
        return cantidad;

    }

    const precioTotal = () => {
        let total = 0;
        products.forEach( producto => {
        total += (producto.precio * producto.cantidad);
    })
        return total;
    }

    const isInCart = (id) => {
        return products.some( producto => producto.id === id );
    }

    const data = {
        products,
        addItemCart,
        RemoveItem,
        clear,
        getProductsQuantity,
        precioTotal
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}



export default CartProvider;

export {CartContext}


import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import './styles/Cart.css';

const Cart = () =>  {

    const { productos, RemoveItem, clear, precioTotal } = useContext(CartContext);

    return(

        productos.length === 0 ?

        <h2>Tu carrito esta vacio, hace click <Link to="/category/remeras"><u>aqui</u></Link> para comprar remeras o <Link to="/category/buzos"><u>aqui</u></Link> para buzos</h2>

        :

        <>
            <div className="cart">
                        <h2>Your purchase</h2>
                        <div>
                            {productos.map(producto => (
                                <div key={producto.id} className="cartProductCard">
                                    <img src={`/assets/img/${producto.imagen}`} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{producto.nombre}</h4>
                                        <div className="purchaseDetails">
                                            <span>Precio por unidad: ${producto.precio}</span>
                                            <span>Cantidad: {producto.cantidad}</span>
                                        </div>
                                        <button onClick={() => RemoveItem(producto.id)}>Sacar Producto</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${precioTotal()}</h3>
                        <button onClick={() => clear()}>Limpiar Carrito</button>
                        <button>Pagar</button>
            </div>
        </>
    )
}

export default Cart
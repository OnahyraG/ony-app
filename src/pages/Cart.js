import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import db from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Cart.css';

const Checkout = () => {

    const { products, removeProduct, clear, getTotalPrice } = useContext(CartContext);

    const [purchaseId, setPurchaseId] = useState("");



    const finishPurchase = () => {

        let customerName = document.getElementById("name").value;
        let customerMail = document.getElementById("email").value;
        let customerPhone = document.getElementById("phone").value;

        if (customerName !== "" &&
            customerMail !== "" ) {

                const purchaseOrder = {
                    buyer: {
                        name: customerName,
                        email: customerMail,
                        phone: customerPhone
                    },
                    items: [...products],
                    date: serverTimestamp(),
                    total: getTotalPrice()
                }
        
                const purchaseOrders = collection(db, "orders");
                addDoc(purchaseOrders, purchaseOrder)
                    .then((result) => {
                        setPurchaseId(result.id);
                    })
            } else {
                console.log("Please fill in all required fields");
            }
    }


    return(

        products.length === 0 ?

        <div className="cartEmpty">
            <h2>Oh! Tu Carrito esta vacio <br/>Click <Link to="/category/mangas"><u>aqui</u></Link> para comprar algo!</h2>
            <img src="./assets/img/cart-empty.png" alt="cart img" />
        </div>
        

        :

        purchaseId !== "" ?
                <div className="purchaseComplete">
                    <div>
                        <h2>Gracias por su comprar el codigo de pedido es:{purchaseId}</h2>
                        <h3>Click <Link to="/" onClick={() => clear()}><u>aqui</u></Link> para continuar !</h3>
                    </div>

                    <img src="./assets/img/purchase-completed.png" alt="smile face" />
                    
                </div>
        
        :

        <>
            <div className="cart">
                        <h2>Tu Compra</h2>
                        <div>
                            {products.map(product => (
                                <div key={product.id} className="cartProductCard">
                                    <img src={`/assets/img/${product.imagen}`} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{product.nombre}</h4>
                                        <div className="purchaseDetails">
                                            <span>Precio: ${product.precio} ARS</span>
                                            <span>Cantidad: {product.quantity}</span>
                                        </div>
                                        <button onClick={() => removeProduct(product.id)}>elimar producto</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${getTotalPrice()}</h3>

                        
            </div>
                        {purchaseId !== "" ? (
                            <>
                            </>
                        ) : (
                        <div className="cartForm">
                            <label htmlFor="name">Ingrese su nombre*</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="email">Ingrese su emai*</label>
                            <input type="text" name="name" id="email" />
                            <label htmlFor="name">Ingrese un numero de telefono</label>
                            <input type="text" name="name" id="phone" />
                            <button onClick={finishPurchase}>Confirmar Compra</button>
                        </div>

                        )}
        </>
    )
}

export default Checkout
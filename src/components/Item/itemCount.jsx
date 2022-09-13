import { useState } from 'react';
import './styles/ItemCount.css';

function ItemCount({ stock, initial, onAdd }){

    const [productCounter, setProductCounter] = useState(initial);
    const [productStock, setProductStock] = useState(stock);

    const addProduct = () => {
        productStock > productCounter ? setProductCounter( productCounter + 1) : console.log(`This product doesn't have any stock at the moment`);
    }

    const removeProduct = () => {
        productCounter > 1 ? setProductCounter( productCounter - 1) : console.log(`You can't do that!`);
    }

    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else console.log("Out of stock");
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <button onClick={removeProduct}>-</button>
                    <p>{productCounter}</p>
                    <button onClick={addProduct}>+</button>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemCount




// import Card from 'react-bootstrap/Card';

//     const ItemCount = ({ stock, initial, funcionn }) => {
//         const [cuenta, setCuenta] = useState(initial)


//         const resta = () => {

//                 if(cuenta > 1) {

//                 setCuenta(cuenta-1)}
//         }

//         useEffect(() => {
//         const suma = () => {

//                 if(cuenta < stock) {

//                 buscarProducto()       
//                 setCuenta(cuenta+1)}

//         }, [])
//         }

//         console.log(productos)

//         console.log(stock , initial );
//                 return (
//                         <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="holder.js/100px180" />
//                                 <Card.Body>
//                                         <Card.Title>Carrito</Card.Title>
//                                         <Card.Text>
//                                                 cantidad en carrito <span>{carrito.length}</span>
//                                         </Card.Text>
//                                         <Button variant="primary" onClick={() => {
//                                                 setCarrito([...carrito,"uñas"]);
//                 <div>
//                         <h1>ejemplo</h1>

//                         <span>{cuenta}</span>

//                         <button onClick = {suma}> + </button>

//                         <button onClick = { () => funcionn(cuenta)}>Añadir</button>

//                         <button onClick = {resta}> - </button>






//                 </div>

//                         // <Card style={{ width: '18rem' }}>
//                         //         <Card.Img variant="top" src="holder.js/100px180" />
//                         //         <Card.Body>
//                         //                 <Card.Title>Carrito</Card.Title>
//                         //                 <Card.Text>
//                         //                         cantidad en carrito <span>{carrito.length}</span>
//                         //                 </Card.Text>
//                         //                 <Button variant="primary" onClick={() => {
//                         //                         setCarrito([...carrito,"uñas"]);

//                                         }}>
//                                                 +
//                                         </Button>
//                                         <Button variant="primary" onClick={() => {
//                         //                 }}>
//                         //                         +
//                         //                 </Button>
//                         //                 <Button variant="primary" onClick={() => {


//                                         }}>
//                                                 Comprar
//                                         </Button>
//                         //                 }}>
//                         //                         Comprar
//                         //                 </Button>

//                                         <Button variant="primary" onClick={() => {
//                                                 setCarrito([carrito,"uñas"]);
//                         //                 <Button variant="primary" onClick={() => {
//                         //                         setCarrito([carrito,"uñas"]);

//                                         }}>
//                                                 -
//                                         </Button>
//                         //                 }}>
//                         //                         -
//                         //                 </Button>

//                                 </Card.Body>
//                         </Card>
//                         //         </Card.Body>
//                         // </Card>

// );
// }
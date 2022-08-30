import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCount = ({ stock, initial, funcionn }) => {
        const [cuenta, setCuenta] = useState(initial)
        // const [carrito, setCarrito] = useState([])
        // const [productos, setProductos] = useState([])

        // const buscarProducto = async () => {
        //         const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q={uñas}`)
        //         const data = await response.json();
        //         setProductos(data.results);
        // }

        // useEffect(() => {

        //         buscarProducto()       

        // }, [])

        // console.log(productos)

        // const onAdd = () => {

        // }

        const resta = () => {

                if(cuenta > 1) {

                setCuenta(cuenta-1)}
        }

        const suma = () => {
                
                if(cuenta < stock) {

                setCuenta(cuenta+1)}

        }


        console.log(stock , initial );
                return (
                <div>
                        <h1>ejemplo</h1>

                        <span>{cuenta}</span>

                        <button onClick = {suma}> + </button>

                        <button onClick = { () => funcionn(cuenta)}>Añadir</button>
        
                        <button onClick = {resta}> - </button>

                        

                        


                </div>

                        // <Card style={{ width: '18rem' }}>
                        //         <Card.Img variant="top" src="holder.js/100px180" />
                        //         <Card.Body>
                        //                 <Card.Title>Carrito</Card.Title>
                        //                 <Card.Text>
                        //                         cantidad en carrito <span>{carrito.length}</span>
                        //                 </Card.Text>
                        //                 <Button variant="primary" onClick={() => {
                        //                         setCarrito([...carrito,"uñas"]);
                                                
                        //                 }}>
                        //                         +
                        //                 </Button>
                        //                 <Button variant="primary" onClick={() => {
                                        
                                        
                        //                 }}>
                        //                         Comprar
                        //                 </Button>
                                        
                        //                 <Button variant="primary" onClick={() => {
                        //                         setCarrito([carrito,"uñas"]);
                                                
                        //                 }}>
                        //                         -
                        //                 </Button>
                                        
                        //         </Card.Body>
                        // </Card>

);
}

export default ItemCount;





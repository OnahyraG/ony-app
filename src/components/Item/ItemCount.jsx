import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCount = () => {
        const [carrito, setCarrito] = useState([])
        const [productos, setProductos] = useState([])

        const buscarProducto = async () => {
                const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q={uñas`)
                const data = await response.jason();
                setProductos(data.results);
        }

        useEffect(() => {

                buscarProducto()       

        }, [])

        console.log(productos)

                return (
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                        <Card.Title>Carrito</Card.Title>
                                        <Card.Text>
                                                cantidad en carrito <span>{carrito.length}</span>
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => {
                                                setCarrito([...carrito,"uñas"]);
                                                
                                        }}>
                                                +
                                        </Button>
                                        <Button variant="primary" onClick={() => {
                                        
                                        
                                        }}>
                                                Comprar
                                        </Button>
                                        
                                        <Button variant="primary" onClick={() => {
                                                setCarrito([carrito,"uñas"]);
                                                
                                        }}>
                                                -
                                        </Button>
                                        
                                </Card.Body>
                        </Card>

);
}

export default ItemCount;





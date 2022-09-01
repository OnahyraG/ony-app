import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Itemjs = (producto) => {

        return(
                        <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.thumbnail} alt=""/>
                        <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>
                        cantidad en carrito <span>{carrito.length}</span>
                        </Card.Text>
                        <Button variant="primary" onClick={() => {
                        setCarrito([...carrito,producto])
                        }}>
                        agregar
                        </Button>
                        </Card.Body>
                        </Card>
                )
}



export default Itemjs;
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Itemjs from "./Itemjs";


const ItemDetail = ({productos}) => {

    console.log("proo",productos)

    const productosFiltrados = () => {

        return productos.filter ((index) => index <=1 )

    }

    
    
    return (
    
        <>
        
            {productosFiltrados().map((producto) => 

                
            <Itemjs id={producto.id} titulo={producto.title} img={producto.thumbnail} precio={producto.price}/>
            )}

        </>
    )
}



export default ItemDetail;




import React from "react";
import { CardTitle } from "reactstrap";
import Itemjs from "./Itemjs";
import Card from 'react-bootstrap/Card';

const ItemLis = ({productos}) => {
    console.log("pro", productos);

    const productosFiltrados = () => {

        return productos.filter ((producto,index) => index <=0 )

    }

    
    
    return (
    
        <>
        
            {productosFiltrados().map((producto) => 

                
            <Itemjs id={producto.id} titulo={producto.title} img={producto.thumbnail} precio={producto.price}/>
            )}

        </>
    )
}

export default ItemLis;

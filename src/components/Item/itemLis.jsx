import React from "react";
import { CardTitle } from "reactstrap";
import Itemjs from "./Itemjs";

const ItemLis = ({productos}) => {
    console.log("pro", productos);

    return (
    
        <>
        
            {productos.map((producto) => {
            <Itemjs id={producto.id} title={producto.title}/>
            } )}

        </>
    )
}

export default ItemLis;

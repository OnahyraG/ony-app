import React from "react";
import Itemjs from "./Itemjs";


const ItemDetail = ({productos}) => {


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



export default ItemDetail;




import React from "react";
import ItemDetail from "./itemDetail";
import { useEffect, useState } from "react";import Itemjs from "./Itemjs";


const ItemDetailContainer = () => {
 

    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        buscarProducto()
        
    
    }, [])


    
const buscarProducto =  async () => {

    try{
        const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=remeras`);
        const data = await response.json();
        setProductos(data.results);
    }catch(e){
        console.log(e);
}
    
}



        return(
            <>
            <ItemDetail productos={productos}/>
            </>
        )
}







export default ItemDetailContainer;
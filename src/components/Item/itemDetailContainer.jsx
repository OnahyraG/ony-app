import React from "react";
import ItemDetail from "./itemDetail";
import { useEffect, useState } from "react";import Itemjs from "./Itemjs";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const ItemDetailContainer = () => {


    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        buscarProducto()
        
    
    }, [])


    
const buscarProducto =  async () => {

    try{
        const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=marketing`);
        const data = await response.json();
        setProductos(data.results);
    }catch(e){
        console.log(e);
}
    
}



        return(
            <>
            <ItemDetail productos={productos}/>
            <Link to={"/"}>
                <Button variant="dark">Home</Button>
            </Link>
            </>
        )
}







export default ItemDetailContainer;
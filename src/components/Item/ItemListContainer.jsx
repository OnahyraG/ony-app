import React,{useState, useEffect} from "react";
import Alert from 'react-bootstrap/Alert';
import ItemLis from "./itemLis"; 
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({greeting}) => {

    //const [carrito, setCarrito] = useState([])
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
            <Alert key={'secondary'} variant={'secondary'}> 
                {greeting} 
            </Alert>

            <ItemLis productos={productos}/>
            </>
        )
}






export default ItemListContainer;


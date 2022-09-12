import React,{useState, useEffect} from "react";
import Alert from 'react-bootstrap/Alert';
import ItemLis from "./itemLis"; 
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ItemDetailContainer from "./itemDetailContainer";
import ItemDetail from "./itemDetail";
import { Link } from "react-router-dom";


const ItemListContainer = ({greeting}) => {

    //const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])

    const {idProducto} = useParams();

    useEffect(() => {
        
        buscarProducto()
        
    
    }, [])


    
const buscarProducto =  async () => {

    try{
        const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=servicio`);
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

            <Link to={"/detalle"}>
                <Button variant="dark">detalle</Button>
            </Link>

            <ItemLis productos={productos}/>

            </>
        )
}






export default ItemListContainer;


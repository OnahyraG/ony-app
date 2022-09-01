import React,{useState, useEffect} from "react";
import Alert from 'react-bootstrap/Alert';


const ItemListContainer = ({greeting}) => {

    //const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setProductos(buscarProducto);
        
    
    }, [])

        return(
            <Alert key={'secondary'} variant={'secondary'}> 
                {greeting} 
            </Alert>
    )
}




const buscarProducto = () => {
        
    
    const Producto = async () => {

            try{
                    const response = await  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=remeras`);
                    const data = await response.json();
                    console.log(data);.
                    return data.results;
            }catch(e){
                    console.log(e);
            }
    }
    
}




export default ItemListContainer;


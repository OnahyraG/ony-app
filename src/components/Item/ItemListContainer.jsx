import {useState, useEffect} from "react";
import ItemList from "./itemList"; 
import { useParams } from "react-router-dom";
import productos from "../../productMock";


const ItemListContainer = () => {

    //const [carrito, setCarrito] = useState([])
    const [listaProductos, setListaProductos] = useState([]);

    const {categoryId} = useParams();

    const filtroPorCategoria = productos.filter((productos) => productos.category === categoryId);

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            categoryId ? resolve(filtroPorCategoria) : resolve(productos)
        })
    }, 2000 )

    useEffect(() => {
        
        getProducts
            .then( (res) => {
                setListaProductos(res);
            } )
            .catch( () => {
                console.log("Error");
            })
        
    
    }, [categoryId])

    return(
        <> 
        <ItemList productos={listaProductos}/>
        </>
    )

}



        







export default ItemListContainer;


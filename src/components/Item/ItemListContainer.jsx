import {useState, useEffect} from "react";
import ItemList from "./itemList"; 
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/firebase";


const ItemListContainer = () => {

    
    const [listaProductos, setListaProductos] = useState([]);

    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        
        const productsCollection = collection(db, 'products');
        const categoryQuery = categoryId && query(productsCollection, where("category", "==", categoryId));

        getDocs(categoryId ? categoryQuery : productsCollection)
        .then( result => {
            const itemList = result.docs.map( item => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })

            setListaProductos(itemList);
        })
        .catch( () => console.log("Error retrieving products"))
        .finally( () => setLoading(false) );
    
    }, [categoryId])

    return(
        <div className='list-products'> 
        {loading ? <h2>Loading...</h2> : <ItemList dataProducts={listaProductos}/>}
        </div>
    )

}



        







export default ItemListContainer;


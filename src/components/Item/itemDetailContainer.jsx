import React from "react";
import ItemDetail from "./itemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, collection} from  "firebase/firestore";
import db from "../../firebase/firebase";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const {id} = useParams();


    useEffect(() => {
        
        const collectionP = collection(db, 'products');
        const referenceDoc = doc(collectionP, id);
        getDoc(referenceDoc)
        .then( result => {
            const product = result.data();
            product.id = result.id;
            setItem(product);
        })
    
    }, [id]);

        return(
            <ItemDetail  item={item} />
        )
}







export default ItemDetailContainer;
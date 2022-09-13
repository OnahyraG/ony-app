import React from "react";
import ItemDetail from "./itemDetail";
import { useEffect, useState } from "react";
import productos from '../../productMock';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const {id} = useParams();

    const filtradoPorId = () => {
        productos.some( (product) => {
            if(product.id == id){
                setItem(product)
            }
        })
    }

    const getItem = new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(filtradoPorId)
        }, 2000)
    })

    useEffect(() => {
        
        getItem
            .then( (res) => {
                setItem(res)
            })
            .catch( (error) => {
                console.log("Error");
            })
        
    
    }, [id])

        return(
            <ItemDetail  item={item} />
        )
}







export default ItemDetailContainer;
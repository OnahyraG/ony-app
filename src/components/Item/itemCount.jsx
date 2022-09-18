import { useState } from 'react';
import './styles/ItemCount.css';

function ItemCount({ stock, onAdd, productoData}){

    const [productCounter, setProductCounter] = useState(1);
    const [productStock, setProductStock] = useState(stock);

    //limite de stock
    const addProduct = (e) => {
        productStock > productCounter ? setProductCounter( productCounter + 1) : console.log(`This product doesn't have any stock at the moment`);
        e.stopPropagation();
    }

    const removeProduct = (e) => {
        productCounter > 1 ? setProductCounter( productCounter - 1) : console.log(`You can't do that!`);
        e.stopPropagation();
    }

    //agregar al carrito
    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else console.log("Out of stock");
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <button onClick={removeProduct}>-</button>
                    <p>{productCounter}</p>
                    <button onClick={addProduct}>+</button>
                </div>
                <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ItemCount;
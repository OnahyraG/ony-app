import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({item}) => {
    
    const {nombre, precio, imagen, descripcion} = item;

    const { addProductToCart } = useContext(CartContext);

    const [quantitySelected, setQuantitySelected] = useState(false);

    const itemsAdded = (count) => {
        addProductToCart({...item, quantity: count});
        setQuantitySelected(true);
    }


    return (
        <div className="itemDetail">
            <div>
                <img src={`/assets/img/${imagen}`} className="cover" alt="loading..." />
            </div>

            <div className="details">
                <h2>{nombre}</h2>
                <p className="description">{descripcion}</p>
                <span>Precio: {precio} $ ARS</span>
                {
                    !quantitySelected ? <ItemCount onAdd={itemsAdded} stock={10} productData={item}/> : <Link to="/cart"><button className="purchaseButton">FINALIZAR COMPRA</button></Link>
                }
            </div>
            
        </div>
    );



}

export default ItemDetail
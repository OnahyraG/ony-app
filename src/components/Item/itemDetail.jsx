import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from './itemCount';
import './styles/ItemDetail.css';


const ItemDetail = ({item}) => {

    const {nombre, precio, imagen, descripcion} = item;

    const { addItemCart } = useContext(CartContext);

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(false);

    const itemsAdded = (count) => {
        addItemCart({...item, cantidad: count});
        setCantidadSeleccionada(true);
    }

    
    
    return (
    
        <div className="itemDetail">
        <div>
            <img src={`/assets/img/${imagen}`} className="cover" alt="Imagen cargando.." />
        </div>

        <div className="detalles">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <span>{precio} $</span>
            {
                !cantidadSeleccionada ? <ItemCount stock={10} onAdd={itemsAdded} productoData={item} /> : <Link to ="/cart"><button>Terminar Compra</button></Link>
            }
            
        </div>

        </div>
    )
}



export default ItemDetail;



import ItemCount from './itemCount';
import './styles/ItemDetail.css';


const ItemDetail = ({item}) => {

    const {nombre, precio, imagen, descripcion} = item;


    const productsAdded = (itemsToCart) => {

        console.log('Items agregados al carrito: ', itemsToCart)

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
            <ItemCount stock={10} initial={1} onAdd={productsAdded} />
        </div>

        </div>
    )
}



export default ItemDetail;




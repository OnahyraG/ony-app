import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({data}) => {

    const {id, nombre, imagen, category} = data;

    return(
        
        <div className="product">
        <h2>{nombre}</h2>
        <img src={`/assets/img/${imagen}`} className="cover" alt="img product" />
        <Link to={`/${category}/${id}`}><button>Mas Detalles</button></Link>
        </div>
        
    )
}

export default Item
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const CartWidget = ({productos}) => {

    const { productosQuantity } = useContext(CartContext);

    return(
        <>
        <i class="ri-shopping-cart-line"/>
        {productos.length !== 0 && <span>{productosQuantity}</span>}
        </>
    )
}


export default CartWidget;
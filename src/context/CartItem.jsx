import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const CartItem = ({producto}) => {
    const {RemoveItem} = useContext(context)

    const Borrar = () => {
        RemoveItem(producto.id);
    };

    return(
        <>
            <h2>{producto.title}</h2>
            <h2>{producto.quantity</h2>
            <button onClick={(Borrar}
        </>
    );
    
};

export default CartItem;
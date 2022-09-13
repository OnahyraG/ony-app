import Item from "./Item";


const ItemList = ({productos}) => {

    return (
        <>
            {productos.map((producto) => {
                return <Item key={producto.id} data={producto} />  
            })}
        </>
    )
}

export default ItemList;
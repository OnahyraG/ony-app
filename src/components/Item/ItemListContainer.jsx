import React from "react";
import Alert from 'react-bootstrap/Alert';


const ItemListContainer = ({greeting}) => {
        return(
            <Alert key={'secondary'} variant={'secondary'}> 
                {greeting} 
            </Alert>
    )
}



export default ItemListContainer;


import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Itemjs = ({id, title}) => {

        console.log("producto", title);

        return(
                        <Card key={id} style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src={producto.thumbnail} alt=""/> */}
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        .
                        </Card.Text>
                        
                        </Card.Body>
                        </Card>
                )
}



export default Itemjs;
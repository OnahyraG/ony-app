import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Itemjs = ({id, titulo, precio, img}) => {

        console.log("producto", titulo);

        return(
                        <Card key={id} style={{ width: '18rem'}} >
                        <Card.Img variant="top" src={img} alt=""/>  
                        <Card.Body >
                        <Card.Title variant="Secondary">{titulo}</Card.Title>
                        <Card.Text>
                        {precio}
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                )
}



export default Itemjs;
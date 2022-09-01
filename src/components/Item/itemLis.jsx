import React from "react";
import Itemjs from "./Itemjs";

const ItemLis = ({productos}) => {
    return (
    
        <>
        
        <div>
            {productos.map((producto,index) => {
                <Itemjs key={index} producto={producto}/>
            } )}
        </div>

        </>
    )
}
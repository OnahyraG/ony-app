import React, { useContext } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";



function NavBar(){

    const { products } = useContext(CartContext);

    
    return(
        <header>
        <div className="navbar">
        <   Link to="/"> <img src="/assets/img/logo.png" className="logo" alt="logo" /></Link>
            <Link to="/"><h3 className="title">Ony App</h3></Link>
            <nav>
            <ul>
                <li><Link to="/"><button>Home</button></Link></li>
                <li><Link to="/category/remeras"><button>Remeras</button></Link></li>
                <li><Link to="/category/buzos"><button>Buzos</button></Link></li>
                <li><Link className="cart" to="/cart"><CartWidget products={products}/></Link></li>
            </ul>   
            </nav>
        </div>
        </header>
    )
}

export default NavBar;
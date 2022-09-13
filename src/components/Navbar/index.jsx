import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css' ;

const NavBar = () => {
    return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/"> <img src="/assets/img/logo.png" className="logo" alt="logo" /></Link>
            
                <Nav className="me-auto">
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/category/remeras"><button>Remeras</button></Link>
                    <Link to="/category/buzos"><button>Buzos</button></Link>                                    
                </Nav>

                <Link to="/cart"><CartWidget/></Link>
        </Container>
    </Navbar>
    </>
    );
}



export default NavBar;
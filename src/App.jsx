
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Nav from 'react-bootstrap/Nav';
import ItemListContainer from './components/Item/ItemListContainer';




const App = () => {

    return (
      <div className="App" >
        <NavBar />
        <ItemListContainer greeting="Prueba"  />
        <h1>hola</h1>
        <header className="App-header">
          
          
          
        </header>
      </div>
    );
}

export default App;

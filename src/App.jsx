
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
        <header className="App-header">
          
          
          <ButtonComponent/>
        </header>
      </div>
    );
}
const ButtonComponent = () => {
  return <button onClick={() => {alert("Bienvenid@ a la Ony app!")}}>Pulsame</button>
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Nav from 'react-bootstrap/Nav';
import ItemListContainer from './components/Item/ItemListContainer';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Prueba"  />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          aqui estamos
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}
const ButtonComponent = () => {
  return <button onClick={() => {alert("Bienvenid@ a la Ony app!")}}>Pulsame</button>
}

export default App;

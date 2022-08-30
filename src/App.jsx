
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Nav from 'react-bootstrap/Nav';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemCount from './components/Item/ItemCount';



const App = () => {

  const onAdd = (cuenta) => {
    console.log( `tu cuenta es ${cuenta}`
    )
  }

    return (
      <div className="App" >
        <NavBar />
        <ItemListContainer greeting="Prueba"  />
        <header className="App-header">
          
          <div>
            <ItemCount stock={5} initial= {1} funcionn={onAdd} />
          </div>
          <ButtonComponent/>
        </header>
      </div>
    );
}
const ButtonComponent = () => {
  return <button onClick={() => {alert("Bienvenid@ a la Ony app!")}}>Pulsame</button>
}

export default App;

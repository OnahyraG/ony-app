
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Nav from 'react-bootstrap/Nav';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/itemDetailContainer';



const App = () => {

    return (
      <div className="App" >
        <NavBar />
        {/* <ItemListContainer greeting="Onny App"  /> */}
        <ItemDetailContainer/>
        <header className="App-header">
          
          
          
        </header>
      </div>
    );
}

export default App;

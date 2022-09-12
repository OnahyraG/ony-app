
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/itemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {

    return (
      <>
          <BrowserRouter>
              
              <NavBar/>
              <Routes>

                  <Route path="/" element={ <ItemListContainer greeting="Ony App"  />}/>
                  <Route path="/producto" element={ <ItemListContainer greeting="Onny App" />}/>
                  <Route path="/detalle" element={ <ItemDetailContainer />}/>

              </Routes>

            </BrowserRouter>
          
      </>
    );
}

export default App;

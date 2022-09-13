
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/itemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Cart from './pages/Cart';



const App = () => {

    return (
      <>
          <BrowserRouter>
              
              <NavBar/>
              <Routes>

                  <Route path="/" element={ <Home />}/>
                  <Route path="/category/:categoryId" element={ <ItemListContainer />}/>
                  <Route path="/:category/:id" element={ <ItemDetailContainer />}/>
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="*" element={<Error />} />
              </Routes>

            </BrowserRouter>
          
      </>
    );
}

export default App;

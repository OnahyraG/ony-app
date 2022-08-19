import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
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

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
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
  return <button> holA</button>
}

export default App;

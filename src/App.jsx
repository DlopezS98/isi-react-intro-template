import logo from './logo.svg';
import './App.css';
import CounterComponent from './counter.component';
import React from 'react';
import { Link } from 'react-router';

function App() {
  // let inputValue = "";
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    // inputValue = event.target.value;
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/login'>Inciar sesion</Link>
        <Link to='/admin/products'>Ir a la pagina de productos</Link>
        <Link to='/admin/categories'>Ir a la pagina de categorias</Link>
        <input type="text" placeholder='Titulo del componente' onChange={handleChange} />
        <CounterComponent title={inputValue} />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CounterComponent from './counter.component';
import React from 'react';

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
        <input type="text" placeholder='Titulo del componente' onChange={handleChange} />
        <CounterComponent title={inputValue} />
      </header>
    </div>
  );
}

export default App;

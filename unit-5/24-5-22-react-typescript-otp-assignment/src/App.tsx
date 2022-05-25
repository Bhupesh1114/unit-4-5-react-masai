import React from 'react';
import logo from './logo.svg';
import './App.css';
import OutputInput from './componnets/OutputInput';

function App() {
  return (
    <div className="App">
      <OutputInput input={5}/>
    </div>
  );
}

export default App;

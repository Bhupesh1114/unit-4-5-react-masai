import React from 'react';
import './App.css';
import CounterComp from './Components/CounterComp';
import ListComp from './Components/ListComp';

function App() {
  return (
    <div className="App">
      <ListComp />
      <CounterComp />
      <hr />
    </div>
  );
}

export default App;

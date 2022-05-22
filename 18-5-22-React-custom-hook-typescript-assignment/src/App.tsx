import React from 'react';
import './App.css';
import CountDown from './Components/CountDown';
import StopWatch from './Components/StopWatch';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <CountDown />
    </div>
  );
}

export default App;

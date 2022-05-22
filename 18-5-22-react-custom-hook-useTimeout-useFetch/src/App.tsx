import React from 'react';
import './App.css';
import FetchComp from './Components/FetchComp';
import UseTimeout from './Hooks/UseTimeout';

function App() {
  const { bool } = UseTimeout(5000);
  return (
    <div className="App">
      <h1>{bool ? "True" : "False"}</h1>
      <FetchComp />
    </div>
  );
}

export default App;

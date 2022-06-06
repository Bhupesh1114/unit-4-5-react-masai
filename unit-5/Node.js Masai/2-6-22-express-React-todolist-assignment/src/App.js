
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';

function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "App background" : "App"}>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Day Mode" : "Night Mode" }</button>
      <Todo darkMode={darkMode}/>
    </div>
  );
}

export default App;

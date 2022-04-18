import "./App.css";
import React from "react";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [button, setButton] = React.useState(false);
  const handleButton = () => {
    setButton(!button);
  }
  return (
    <div className="App">
      <button onClick={handleButton} className="toggleForm">
        {button? "Show Rentals" : "Add House"}
      </button>
      {button?   <AddHouse />:   <Rentals />}
    
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
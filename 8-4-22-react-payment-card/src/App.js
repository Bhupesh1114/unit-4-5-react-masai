import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        color="#FFA500"
        date="28/10/2020"
        image="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
        button="Case Study"
        name="Amazon Gift"
        pay="pay"
        type="Desktop-Mobile"
      />
      <Card
        color="#F5F5F5"
        date="17 Sep 2020"
        image="https://cdn-icons-png.flaticon.com/512/5968/5968365.png"
        button="Case Study"
        name="Apple Gift"
        pay="payment"
        type="MacOS-Mobile"
      />
    </div>
  );
}

export default App;

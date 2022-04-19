import "./App.css";
import Button from "./components/Button.styled.jsx";

function App() {


  return (
    <div className="App">
      <div>
      <Button bgColor="#2490FE" padding="5px 20px" color="#fff" fontSize="20px" border="none" >Primary Button</Button>
      <Button bgColor="#fff" padding="5px 20px" color="#000" fontSize="20px" border="1px solid #ccc" >Default Button</Button>
      <Button bgColor="#fff" padding="5px 20px" color="#000" fontSize="20px" border="1px dotted #ccc" >Dashed Button</Button>
      <Button bgColor="#fff" padding="5px 20px" color="#000" fontSize="20px" border="none" >Text Button</Button>
      <Button bgColor="#fff" padding="5px 20px" color="#2490FE" fontSize="20px" border="1px solid #ccc" >Link Button</Button>
      </div>
      
    </div>
  );
}

export default App;

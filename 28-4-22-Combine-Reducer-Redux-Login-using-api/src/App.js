
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="home" element={<RequireAuth><Home /></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;

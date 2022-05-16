import { Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login_Signup/Login';
import Resgistration from './Components/Login_Signup/Resgistration';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Resgistration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </div>
  );
}

export default App;

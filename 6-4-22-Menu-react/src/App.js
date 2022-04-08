import JoinUs from "./components/JoinUs";
import Settings from "./components/Settings.jsx";
import { Problem11, Problem12 } from "./components/Problem1";
import Login from "./components/Login.jsx";
import ContactUs from "./components/ContactUs";
import Search from "./components/Search";
import Help from "./components/Help";
import Home from "./components/Home";
import Download from "./components/Download";
import { Problem21, Problem22 } from "./components/Problem2.jsx";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Problem11 />
      <Problem12 />
      <div>
        <JoinUs />
        <Settings />
        <Login/>
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
      <Problem21
        heading="Mobile Operating System"
        l1="Android"
        l2="Blackberry"
        l3="Iphone"
        l4="Windows Phone"
      />
      <Problem21
        heading="Mobile Manufacturer"
        l1="Samsung"
        l2="HTC"
        l3="Micromax"
        l4="Apple"
      />
      <div>
        <Problem22 name="join us"/>
        <Problem22 name="settings"/>
        <Problem22 name="login"/>
        <Problem22 name="contact us"/>
        <Problem22 name="search"/>
        <Problem22 name="help"/>
        <Problem22 name="home"/>
        <Problem22 name="download"/>
      </div>
    </div>
  );
}

export default App;

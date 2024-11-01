import './App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function App() {

  const [value, setValue] = useState("Type Here!")

  return (
    <div className="App">
      <div className="head">
        <img className='pointer' style={{marginLeft: 30}} align="left" src="src/logo.png" width={100} alt="logo"></img>
        <input className='head-input' type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <FaSearch onClick={()=>alert("TRY")} className='pointer' type='submit' value="Submit" style={{fontSize: 30, marginTop: 30}} />
        <button className='log-button pointer'> เข้าสู่ระบบ / Log In </button>
      </div>
      <div className="box">a</div>
      <header className="App-header">
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

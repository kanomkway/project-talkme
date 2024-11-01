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

function MainScreen() {

  const [value, setValue] = useState("Type Here!")

  return (
    <div className="App">
      <div className="head">
        <img className="pointer" style={{ marginLeft: 30 }} align="left" src="src/logo.png" width={100} alt="logo" />
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ค้นหา"
          />
          <FaSearch
            onClick={() => alert("TRY")}
            className="search-icon"
          />
        </div>
        <button className="log-button pointer">เข้าสู่ระบบ / Log In</button>
      </div>
      <div className="box">
        <div className="mainS-button-container">
            <button className="mainS-button">a</button>
            <button className="mainS-button">b</button>
            <button className="mainS-button">c</button>
            <button className="mainS-button">d</button>
            <button className="mainS-button">e</button>
        </div> 
      </div>
      <div className="mainS">
        <p className='mainS-text'>Recently Board</p>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;

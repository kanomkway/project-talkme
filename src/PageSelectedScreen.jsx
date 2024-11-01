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

function PageSelectedScreen() {

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
            onFocus={() => setValue("")}
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
      <div className="selected-box">
        <div className="selected-text">
            <p className='Typed-text'>img</p>
            <button className='Arrange-text'>Recently Board▼</button>
        </div>        
        <div className="selected-content-container">
            a
        </div>
        <div className="selected-content-container">
            a
        </div>
        <div className="selected-content-container">
            a
        </div>
        <div className="selected-content-container">
            a
        </div>
        <div className="selected-content-container">
            a
        </div>
        
        
      </div>
    </div>
  );
}

export default PageSelectedScreen;

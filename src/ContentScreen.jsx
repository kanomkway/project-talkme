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

function ContentScreen() {

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
      <div className="content-box">
        <div className="selected-text">
            <p className='Typed-text'>ยังไม่เสร็จ</p>
            <button className='Arrange-text'>Recently Board▼</button>
        </div>        
        <div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContentScreen;

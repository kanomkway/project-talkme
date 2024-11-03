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

function TagScreen() {
  const [value, setValue] = useState("Type Here!");

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

      <main className="main-content">
        <div className="tags-header">
          <div className="profile-header"> 
              <h2>Tag</h2>  
          </div>
          <div className="search-tags">
            <input type="text" placeholder="ค้นหาชื่อแท็ก" />
            <FaSearch className="search-icon-small" />
            <button className="sort-button">ก - ฮ ▼</button>
          </div>
      </div>

      <div className="tags">
        <button className="tag active">
          <div>ทั่วไป</div>
        </button>
        <button className="tag">
          <div>ท่องเที่ยว</div>
        </button>
        <button className="tag">
          <div>เพลง</div>
        </button>
        <button className="tag">
          <div>สัตว์เลี้ยง</div>
        </button>
        <button className="tag">
          <div>อาหาร</div>
        </button>
      </div>
      </main>
    </div>
  );
}

export default TagScreen;
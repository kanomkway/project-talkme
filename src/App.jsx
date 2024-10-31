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

      <nav className="nav-bar">
        <button className="nav-icon">👤</button>
        <button className="nav-icon">#</button>
        <button className="nav-icon">➕</button>
        <button className="nav-icon">💬</button>
        <button className="nav-icon">⭐</button>
        <button className="nav-icon">🔄</button>
      </nav>

      <main className="main-content">
  <div className="tags-header">
    <h2>Tags</h2>
      <div className="search-tags">
        <input type="text" placeholder="ค้นหาชื่อแท็ก" />
        <FaSearch className="search-icon-small" />
        <button className="sort-button">ก - ข ▼</button>
      </div>
  </div>

  <div className="tags">
    <button className="tag active">
      <div className="tag-icon">👥</div>
      <div>ทั่วไป</div>
    </button>
    <button className="tag">
      <div className="tag-icon">🧳</div>
      <div>ท่องเที่ยว</div>
    </button>
    <button className="tag">
      <div className="tag-icon">🎵</div>
      <div>เพลง</div>
    </button>
    <button className="tag">
      <div className="tag-icon">🐾</div>
      <div>สัตว์เลี้ยง</div>
    </button>
    <button className="tag">
      <div className="tag-icon">🍔</div>
      <div>อาหาร</div>
    </button>
  </div>
</main>

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

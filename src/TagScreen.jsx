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

export default TagScreen;
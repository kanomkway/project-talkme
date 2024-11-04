import "./App.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";

function TagScreen() {
  const [value, setValue] = useState("Type Here!");

  const navigate = useNavigate();
  const toGeneral = () => {
    navigate("/general-p");
  };

  return (
    <div className="App">
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
          <button className="tag active" onClick={toGeneral}>
            <img
              src="src/img/ปุ่มหมวดทั่วไป.png"
              alt="ทั่วไป"
              width="40px"
              height="50px"
            />
          </button>
          <button className="tag">
            <img
              src="src/img/ปุ่มหมวดท่องเที่ยว.png"
              alt="ทั่วไป"
              width="40px"
              height="50px"
            />
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

import './TagScreen.css';
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
      <main className="main-content">
        <div className="board-header">
          <h2>TAGS</h2> 
          <div className="search-tags">
            <input type="text" placeholder="ค้นหาชื่อแท็ก" />
            <FaSearch className="search-icon-small" />
          </div>
          <button className="sort-button">ก - ฮ ▼</button>
        </div>
        <div className="tags">
          <button className="tag" onClick={toGeneral}>
          <img src="src/img/ปุ่มหมวดทั่วไป.png" alt="ทั่วไป" width="45px" height="60px" />
          </button>
          <button className="tag">
          <img src="src/img/ปุ่มหมวดท่องเที่ยว.png" alt="ท่องเที่ยว" width="45px" height="60px" />
          </button>
          <button className="tag">
          <img src="src/img/ปุ่มหมวดเพลง.png" alt="เพลง" width="45px" height="60px" />
          </button>
          <button className="tag">
          <img src="src/img/ปุ่มหมวดสัตว์เลี้ยง.png" alt="สัตว์เลี้ยง" width="45px" height="60px" />
          </button>
          <button className="tag">
          <img src="src/img/ปุ่มหมวดอาหาร.png" alt="อาหาร" width="45px" height="60px" />
          </button>
        </div>
      </main>
  );
}

export default TagScreen;

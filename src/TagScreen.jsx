import "./TagScreen.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";

function TagScreen() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const toGeneral = () => {
    navigate("/general-p");
  };
  const toFood = () => {
    navigate("/food-p");
  };
  const toMusic = () => {
    navigate("/music-p");
  };

  const tags = [
    { id: "general", label: "ทั่วไป", imgSrc: "src/img/ปุ่มหมวดทั่วไป.png" },
    { id: "food", label: "อาหาร", imgSrc: "src/img/ปุ่มหมวดอาหาร.png" },
    { id: "music", label: "เพลง", imgSrc: "src/img/ปุ่มหมวดเพลง.png" },
  ];

  return (
    <main className="main-content">
      <div className="board-header">
        <h2>TAGS</h2>
        <div className="search-tags">
          <input
            type="text"
            placeholder="ค้นหาชื่อแท็ก"
            onChange={(e) => setValue(e.target.value)}
          />
          <FaSearch className="search-icon-small" />
        </div>
      </div>
      <div className="tags">
        {tags
          .filter((tag) => tag.label.includes(value))
          .map((tag) => (
            <button
              key={tag.id}
              id={tag.id}
              className="tag"
              onClick={() => {
                if (tag.id === "general") toGeneral();
                else if (tag.id === "food") toFood();
                else if (tag.id === "music") toMusic();
              }}
            >
              <img
                src={tag.imgSrc}
                alt={tag.label}
                width="45px"
                height="60px"
              />
            </button>
          ))}
      </div>
    </main>
  );
}

export default TagScreen;

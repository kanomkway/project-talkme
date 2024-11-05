import "./CreatePostScreen.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function CreatePostScreen() {
  const apiurl = "http://localhost:5000";
  const toMyBoard = () => {
    useNavigate("/my_board");
  };
  const [value, setValue] = useState("Type Here!");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const InsertDatabase = async () => {
    console.log(title, category);
    if (!title || !category) {
      Swal.fire({
        title: "ผิดพลาด!",
        text: "กรอกข้อมูลให้ครบ",
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
      return;
    }
    console.log("Sending:", {
      category: category,
      title: title,
      content: content,
    });

    try {
      const responsedata = await axios.post(`${apiurl}/api/addto/${category}`, {
        title: title,
        content: content,
      });
      const data = responsedata.data;

      Swal.fire({
        title: "เผยแพร่สำเร็จ!",
        icon: "success",
        text: data.message,
        confirmButtonColor: "#134e4a",
      }).then(() => {
        window.location.href = "/my_board";
      });
    } catch (error) {
      console.log("error:", error);
      const errorMessage =
        error.response?.data?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อ";
      Swal.fire({
        title: "ข้อมูลผิดพลาด!",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
    }
  };

  return (
    <div className="create-new-container">
      <div className="header">
        <h1 style={{ fontWeight: 800 }}>CREATE NEW</h1>
        <div className="header-buttons">
          <a href="/my_board">
            <h3 className="cancel">CANCEL</h3>
          </a>
        </div>
      </div>

      <div className="input-container">
        <div className="input-group">
          <label>Title :</label>
          <input
            type="text"
            className="input-field"
            placeholder="ใส่หัวข้อ"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="input-group">
          <label>Category :</label>
          <div className="dropdown">
            <select
              className="dropdown-select"
              style={{ width: "120px" }}
              value={category}
              onChange={(e) => {
                setCategory("tag_" + e.target.value);
              }}
            >
              <option value="">---</option>
              <option value="general">ทั่วไป</option>
              <option value="food">อาหาร</option>
              <option value="music">เพลง</option>
            </select>
          </div>
        </div>
      </div>

      <div className="content-container">
        <label>Content :</label>
        <textarea
          id="content"
          className="content-field"
          placeholder="พิมพ์เนื้อหาได้ที่นี่..."
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <button
          className="public-button"
          style={{ fontWeight: 700 }}
          type="button"
          onClick={() => InsertDatabase()}
        >
          PUBLIC
        </button>
      </div>
    </div>
  );
}

export default CreatePostScreen;

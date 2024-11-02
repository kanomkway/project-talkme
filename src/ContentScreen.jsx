import './ContentScreen.css';
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
    <main className="main-content">
    <div className="post-container">
      <h3 className="post-title">บริการร้านเกมหน้ามอ</h3>
      <p className="post-content">
        สำหรับใครที่หาเพื่อนเล่นเกม...
      </p>
      <div className="post-footer">
        <button className="like-button">👍 978</button>
        <button className="share-button">เล็งหัวอิงหู</button>
      </div>
    </div>
    <div className="comment-container">
      <h4>Comment #1</h4>
      <p className="comment-content">
        +10000 พี่ๆที่ชวนเล่นนี่สย...
      </p>
      <div className="comment-footer">
        <button className="like-button">👍 113</button>
        <button className="dislike-button">👎</button>
        <p>เกิดมาแฉ</p>
      </div>
    </div>
    <div className="comment-input-container">
      <label htmlFor="comment">Comment :</label>
      <textarea id="comment" className="comment-input" placeholder="Write a comment..."></textarea>
      <button className="send-button">SEND</button>
    </div>
  </main>
  );
}

export default ContentScreen;

import './FollowedBoardScreen.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function FollowedBoardScreen() {
  const [value, setValue] = useState("Type Here!");

  return (
    <main className="main-content">
      <div className="board-header">
        <h2>FOLLOWED BOARD</h2>
      </div>
      <div className='post-container'>
        <p style={{ marginLeft: "auto" }}>Recently Board  ▼</p>
        <div className="post">
          <div className="post-header">
            <h3>บริการร้านเกมหน้ามอ</h3>
            <span className="star-icon">★</span>
          </div>
          <p className="post-date">สำหรับใครที่หาเพื่อนเล่นเกม ไม่มีใครเล่นด้วย สามารถมาจอยๆกันได้นะ ไม่ว่าจะเป็น RTS MOBA FPS คนเล่น...</p>
          <div className="post-footer">
            <span>👍 978 👎</span>
            <span>เล็งหัวยิงหู</span>
          </div>
        </div>
        <div className="post">
        <div className="post-header">
            <h3>รีวิว : ข้าวมันไก่ประตูหก</h3>
            <span className="star-icon">★</span>
          </div>
          <p className="post-date">กลับมากันอีกแล้วนะ สำหรับซีรี่ย์รีวิวชิมรอบมอ จากที่วันก่อนเราได้ไปลองของหวานกันมาแล้ว สำหรับคร...</p>
          <div className="post-footer">
            <span>👍 16 👎</span>
            <span>ราชินีกินจุ</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FollowedBoardScreen;
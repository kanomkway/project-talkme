import './MyBoardScreen.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function ParticipatedScreen() {

  const [value, setValue] = useState("Type Here!")

  return (
    <main className='main-content'>
        <div className="board-header">
                <h2>PARTICIPATED BOARD</h2>
        </div>
        <div className='post-container'>
            <p style={{ marginLeft: "auto" }}>Recently Board ▼</p>
            <div className="post">
                <h3>บริการร้านเกมหน้ามอ</h3>
                <p className="post-date">สำหรับใครที่หาเพื่อนเล่นเกม ไม่มีใครเล่นด้วย สามารถมาจอยๆกันได้นะ ไม่ว่าจะเป็น RTS MOBA FPS คนเล่น...</p>
                <div className="post-footer">
                    <span>👍 1207  👎</span>
                    <span>อนาคตคนรวย</span>
                </div>
            </div>
            <div className='reply-post'>
                <div className='reply-post-box'>
                    <h3>YOUR COMMENT</h3>
                    <p className="post-date">ผมเล่นวาโลอยู่ครับ แรงค์บรอนซ์ ID:richboyz#11111 แอดมาได้ครับ</p>
                </div> 
            </div>
        </div>
    </main>
  );
}

export default ParticipatedScreen;

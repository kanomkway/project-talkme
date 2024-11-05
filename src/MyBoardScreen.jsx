import "./MyBoardScreen.css"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function MyBoardScreen() {

  const [value, setValue] = useState("Type Here!")

  const navigate = useNavigate();

  const gotoCreatePost=()=>{
    navigate('/create-p');
  }

  return (
    <main className="main-content">
        <div className="board-header">
            <h2>MY BOARD</h2>
            <button className="create-button" onClick={gotoCreatePost}>CREATE NEW ✎</button>
        </div>
            <div className="post-container">
                <p style={{ marginLeft: "auto" }}>Popular Board ▼</p>
                <div className="post">
                    <h3>ผมอยากถูกหวย แต่ไม่อยากซื้อหวย เพราะไม่มีตังซื้อหวยอีกที</h3>
                    <p className="post-date">1 ตุลาคม 2567 ป้าข้างบ้านผมบอกแม่ผมว่า...</p>
                    <div className="post-footer">
                        <span>👍 1207  👎</span>
                        <span>อนาคตคนรวย</span>
                    </div>
                </div>
          </div>
    </main>
  );
}

export default MyBoardScreen;

import './ContentScreen.css';
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

function ContentScreen() {

  const location = useLocation();
  const {id,title,content} = location.state || {};

  useEffect(()=>{

  },[title])

  const [value, setValue] = useState("Type Here!")

  const insertComment = async () => {
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
        window.location.href = "/";
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
    <main className="main-content">
    <div className="post-content-container">
      <h3 className="post-title">{title}</h3>
      <p className="post-content">
        {content}
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
      <button className="send-button"
      onClick={()=>insertComment()}
      >
        SEND</button>
    </div>
  </main>
  );
}

export default ContentScreen;

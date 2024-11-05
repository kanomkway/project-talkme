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
import Swal from 'sweetalert2';
import axios from 'axios';

function ContentScreen() {

  const apiurl = "http://localhost:5000";
  const location = useLocation();
  const {id,title,content,tag} = location.state || {};

  const [comment,setComment] = useState([]);

  useEffect(()=>{
    if (!id || !tag) {
      console.log("Missing id or tag");
      return;
    }
    axios
      .get(`${apiurl}/content?id=${id}&tag=${tag}`)
    .then(response=>{
      setComment(response.data);
      console.log(response.data);
      if(!id || !tag || !info){
        console.log("Sending:", {
          id: id,
          tag:tag,
          info:info
        });   
      }
      
    })
    .catch(error=>{
      console.log("error!");
    })
    return ()=>{
    }}
    ,[])

  const [info,setInfo] = useState("")

  const handleInfo = (e) => {
    setInfo(e.target.value);
  };

  const insertComment = async () => {
    console.log(id, info,tag);
    if (!id || !info || !tag) {
      Swal.fire({
        title: "ผิดพลาด!",
        text: "กรอกข้อมูลให้ครบ",
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
      return;
    }
    console.log("Sending:", {
      id: id,
      tag:tag,
      info:info
    });
    try {
      const responsedata = await axios.post(`${apiurl}/api/addcomment`, {
        id:id,
        tag:tag,
        info: info,
      });
      const data = responsedata.data;

      Swal.fire({
        title: "แสดงความคิดเห็นสำเร็จ!",
        icon: "success",
        text: data.message,
        confirmButtonColor: "#134e4a",
      }).then(() => {
        window.location.href = "/content";
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

  const commentList = comment?.map((item, index) => (
    <div className="comment-container" key={index}>
      <h4>Comment #{index+1}</h4>
      <p className="comment-content">
        {item.info}
      </p>
    </div>
));

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
    {commentList}
    <div className="comment-input-container">
      <label htmlFor="comment">Comment :</label>
      <textarea id="comment" className="comment-input" placeholder="Write a comment..." 
      onChange={handleInfo}></textarea>
      <button className="send-button"
      onClick={()=>insertComment()}
      >
        SEND</button>
    </div>
  </main>
  );
}

export default ContentScreen;

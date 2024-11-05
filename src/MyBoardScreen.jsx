import "./MyBoardScreen.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Item(props) {
  return (
    <div key={props.id} className="post">
      <TiDelete
        size={30}
        style={{ position: "absolute", right: 150 }}
        className="pointer"
        onClick={() => props.del_callback(props.category, props.id)}
      />
      <h3>
        ({props.category}) # {props.id} &nbsp;{props.title}
      </h3>
      <div className="long-tex">เนื้อหา: {props.content}</div>
      <br />
    </div>
  );
}

function MyBoardScreen() {
  const URL = "http://localhost:5000";
  const [value, setValue] = useState("Type Here!");

  const navigate = useNavigate();
  const gotoCreatePost = () => {
    navigate("/create-p");
  };

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : {}; // แปลง JSON เป็น object
  const username = user.username || "";

  const [con, setCon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // ใช้ Promise.all เรียก API 3 ตัวพร้อมกัน
        const [generalData, foodData, musicData] = await Promise.all([
          axios.get(URL + "/api/general"),
          axios.get(URL + "/api/food"),
          axios.get(URL + "/api/music"),
        ]);

        const generalWithCategory = generalData.data
          .filter((item) => item.username === username)
          .map((item) => ({ ...item, category: "general" }));

        const foodWithCategory = foodData.data
          .filter((item) => item.username === username)
          .map((item) => ({ ...item, category: "food" }));

        const musicWithCategory = musicData.data
          .filter((item) => item.username === username)
          .map((item) => ({ ...item, category: "music" }));

        // รวมข้อมูล 3 ตาราง
        const combinedData = [
          ...generalWithCategory,
          ...foodWithCategory,
          ...musicWithCategory,
        ];

        setCon(combinedData);
        console.log(combinedData);
      } catch (error) {
        console.log("เกิดข้อผิดพลาดในการเรียก API:", error);
      }
    };

    fetchData();
  }, []);

  const contentList = con.map((item) => (
    <Item {...item} del_callback={delPost} />
  ));

  async function delPost(category, id) {
    try {
      console.log(category, id);
      const response = await axios.delete(
        `${URL}/api/delete/${category}/${id}`
      );
      if (response.status === 200) {
        Swal.fire({
          title: "ลบสำเร็จ!",
          text: response.data.message,
          icon: "success",
          confirmButtonColor: "#134e4a",
        }).then(() => {
          location.reload();
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด!",
        text: error.response?.data?.message || "ไม่สามารถลบโพสต์ได้",
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
    }
  }

  return (
    <main className="main-content">
      <div className="board-header">
        <h2>MY BOARD</h2>
        <button className="create-button" onClick={gotoCreatePost}>
          CREATE NEW ✎
        </button>
      </div>
      <div className="post-container">
        <select
          className="dropdown-select"
          style={{ marginLeft: "auto", width: "150px" }}
        >
          <option>Recently Board</option>
        </select>
        <br />
        <div>{contentList}</div>
      </div>
    </main>
  );
}

export default MyBoardScreen;

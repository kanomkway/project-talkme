import "./EditProfileScreen.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

function EditProfileScreen() {
  const navigate = useNavigate();
  const toProfile = () => {
    navigate("/profile");
  };
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : {}; // แปลง JSON เป็น object
  const username = user.username || "";
  const password = user.password || "";

  const apiurl = "http://localhost:5000";
  const [u, setU] = useState("");
  const [p, setP] = useState("");

  const changetoDatabase = async () => {
    if (!u || !p) {
      Swal.fire({
        title: "ผิดพลาด!",
        text: "กรุณากรอกข้อมูลให้ครบ!",
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
      return;
    }
    console.log("Sending:", {
      oldUsername: username,
      newUsername: u,
      password: p,
    });

    const data = {
      oldUsername: username,
      newUsername: u,
      password: p,
    };

    if (!username) {
      alert("No Username");
      return;
    }
    axios
      .put(apiurl + "/api/updateuser/" + username, data)
      .then((response) => {
        if (response.data.status == "ok") {
          const updatedUser = { username: u, password: p }; // หรือใส่ password เป็นค่าที่เก็บอยู่ก่อนหน้านี้
          localStorage.setItem("user", JSON.stringify(updatedUser)); // อัปเดต localStorage
          Swal.fire({
            title: "แก้ไขสำเร็จ!",
            icon: "success",
            confirmButtonColor: "#134e4a",
          }).then(() => {
            toProfile();
          });
        }
      })
      .catch((error) => {
        console.error(
          "Error updating user:",
          error.response?.data || "An error occurred"
        );
        Swal.fire({
          title: "ผิดพลาด!",
          text: error.response?.data || "เกิดข้อผิดพลาดในการอัปเดตข้อมูล",
          icon: "error",
          confirmButtonColor: "#134e4a",
        });
      });
  };

  const handleUserChange = (e) => {
    setU(e.target.value);
    console.log("New Username: " + u);
  };

  const handlePassChange = (e) => {
    setP(e.target.value);
    console.log("New Password: " + p);
  };

  return (
    <div className="App">
      <div className="editprofile-header">
        <h2>EDIT PROFILE</h2>
      </div>

      <div>
        <img src="src/img/flower.png" alt="Profile" className="profileImage" />
      </div>
      <br />
      <br />

      <form className="form-section">
        <div className="form-group-inline">
          <label>New Username :</label>
          <input type="text" onChange={handleUserChange} />
        </div>
        <div className="form-group-inline">
          <label>New Password :</label>
          <input type="text" onChange={handlePassChange} />
        </div>
      </form>

      <div className="button-group">
        <button
          type="button"
          className="save-button"
          onClick={() => changetoDatabase()}
        >
          SAVE
        </button>
        <button type="button" className="cancel-button" onClick={toProfile}>
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default EditProfileScreen;

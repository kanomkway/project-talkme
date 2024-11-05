import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };

  const apiurl = "http://localhost:5000";
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const InsertDatabase = async () => {
    if (!name || !pass) {
      Swal.fire({
        title: "ผิดพลาด!",
        text: "กรอกข้อมูลให้ครบ",
        icon: "error",
        confirmButtonColor: "#134e4a",
      });
      return;
    }
    console.log("Sending:", { username: name, password: pass });

    try {
      const responsedata = await axios.post(apiurl + "/api/adduser", {
        username: name,
        password: pass,
      });
      const data = responsedata.data;

      Swal.fire({
        title: "ลงทะเบียนสำเร็จ!",
        icon: "success",
        text: data.message,
        confirmButtonColor: "#134e4a",
      }).then(() => {
        toLogin();
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <img
          src="src/img/logo.png"
          width={180}
          style={{
            marginTop: "40px",
            marginBottom: "15px",
          }}
        />
        <h1 style={{ marginBottom: "35px" }}>REGISTER</h1>
      </div>
      <div>
        <h2>USERNAME</h2>
        <input
          id="name"
          value={name}
          type="text"
          onChange={handleNameChange}
        ></input>
        <h2>PASSWORD</h2>
        <input
          id="pass"
          value={pass}
          type="text"
          onChange={handlePassChange}
        ></input>
        <br />
        <br />
        <button
          className="save-button l"
          type="button"
          onClick={() => InsertDatabase()}
        >
          SAVE
        </button>
      </div>
      <div>
        <h3 style={{ cursor: "pointer", marginTop: "35px" }} onClick={toLogin}>
          <FaBackward size={18} /> &nbsp; Back
        </h3>
      </div>
    </div>
  );
};

export default RegisterScreen;

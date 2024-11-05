import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import axios from "axios";

const LoginScreen = () => {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/register");
  };

  const apiurl = "http://localhost:5000";
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = async () => {
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
      const getdata = await axios.get(apiurl + "/api/user");
      const users = getdata.data;
      console.log(users);
      const user = users.find(
        (user) => user.username === name && user.password === pass
      );

      if (user) {
        setLoginStatus("Login successful!");
        localStorage.setItem("user", JSON.stringify(user));
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ!",
          icon: "success",
          confirmButtonColor: "#134e4a",
        });
      } else {
        setLoginStatus("Username or Password is incorrect.");
        Swal.fire({
          title: "ข้อมูลผิดพลาด!",
          icon: "error",
          text: "Username or Password is incorrect.",
          confirmButtonColor: "#134e4a",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginStatus("An error occurred during login.");
      Swal.fire({
        title: "ข้อมูลผิดพลาด!",
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
          width={220}
          style={{
            marginTop: "50px",
            marginBottom: "30px",
          }}
        />
        <br />
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
          type="password"
          onChange={handlePassChange}
        ></input>
        <br />
        <br />
        <br />
        <button className="save-button l" type="button" onClick={handleLogin}>
          OK
        </button>
      </div>
      <div>
        <br />
        <h3 style={{ cursor: "pointer" }} onClick={toRegister}>
          No user? REGISTER HERE
        </h3>
      </div>
    </div>
  );
};

export default LoginScreen;

import "./ProfileScreen.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProfileScreen() {
  const [value, setValue] = useState("Type Here!");
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData); // แปลง JSON เป็น object
  const username = user.username;
  const password = user.password;
  console.log("Username: " + username + ", Password: " + password);

  const navigate = useNavigate();

  const toEditProfile = () => {
    navigate("/editProfile");
  };

  const logout = () => {
    localStorage.setItem("user", JSON.stringify({}));
    console.log("Log out success.");
    Swal.fire({
      title: "ออกจากระบบสำเร็จ!",
      icon: "success",
      confirmButtonColor: "#134e4a",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <main className="main-content">
      <div className="profile-header">
        <h2>PROFILE</h2>
      </div>
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-image-container">
            <img
              src="src/img/flower.png"
              alt="ทั่วไป"
              className="profile-image"
            />
          </div>
          <button className="edit-profile-btn" onClick={toEditProfile}>
            EDIT PROFILE <i className="icon-edit"></i>
          </button>
          <button className="logout-btn" onClick={logout}>
            LOG OUT
          </button>
        </div>

        <div className="profile-right">
          <div className="user-info">
            <h1>Username :</h1>
            <div className="user-info-value">{username}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileScreen;

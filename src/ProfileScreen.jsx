import './App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
    const [value, setValue] = useState("Type Here!")

    const navigate=useNavigate();

    const EditProfile=()=>{
      navigate('/editProfile');
    }

  return (
    <div className="App">
        <div className="head">
            <img className="pointer" style={{ marginLeft: 30 }} align="left" src="src/logo.png" width={100} alt="logo" />
            <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={value}
            onFocus={() => setValue("")}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ค้นหา"
          />
          <FaSearch
            onClick={() => alert("TRY")}
            className="search-icon"
          />
        </div>
        <button className="log-button pointer">เข้าสู่ระบบ / Log In</button>
        </div>

        <div className="profile-header">
            <h2>Profile</h2>
        </div>
      
        <div class="profile-container">
          <div class="profile-left">
          <img src="path/to/profile-image.jpg" alt="Profile" class="profile-image" />
            <button class="edit-profile-btn" onClick={EditProfile}>EDIT PROFILE <i class="icon-edit"></i></button>
            <button class="logout-btn">LOG OUT</button>
          </div>
        
        <div class="profile-right">
                <div class="user-info">
                    <div class="user-info-label">Name User :</div>
                    <div class="user-info-value">CHATjam</div>
                    <div class="user-info-label">ID User :</div>
                    <div class="user-info-value">0000001</div>
                </div>
                <div class="board-container">
                  <div class="board-tabs">
                      <button class="tab active">MY BOARD</button>
                      <button class="tab">FOLLOWED BOARD</button>
                      <button class="tab">COMMENTED BOARD</button>
                  </div>
                  <div class="board-content">
                      <p>...</p>
                  </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProfileScreen;
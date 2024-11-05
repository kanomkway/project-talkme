import './ProfileScreen.css';
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
      <main className='main-content'>
        <div className="profile-header">
            <h2>PROFILE</h2>
        </div>
          <div class="profile-container">
            
            <div class="profile-left">
            <div className="profile-image-container">
              <img src="src/img/flower.png" alt="ทั่วไป" className="profile-image" />
            </div>
            <button className="edit-profile-btn" onClick={EditProfile}>EDIT PROFILE <i className="icon-edit"></i></button>
            <button className="logout-btn">LOG OUT</button>
            </div>
            
            <div class="profile-right">
              <div class="user-info">
                <div class="user-info-label">Name User :</div>
                <div class="user-info-value">CHATjam</div>
                <div class="user-info-label">ID User :</div>
                <div class="user-info-value">0000001</div>
              </div>
              
            </div>
          </div>
      </main>
    );
}

export default ProfileScreen;
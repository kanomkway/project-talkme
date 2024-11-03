import './App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function EditProfileScreen() {
    const [value, setValue] = useState("Type Here!")

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

        <div className="profile-edit-container">
          <button className="edit-image-button">Edit Image</button>
          <img src="path/to/profile-image.jpg" alt="Profile" class="profile-image" />
        <div className="user-id">ID User : 0000001</div>
      </div>
      
        <form className="form-section">    
            <div className="form-group-inline">
              <label>Name User :</label>
              <input type="text" defaultValue="CHATjam" />
            </div>
            <div className="form-group-inline">
              <label>Email :</label>
              <input type="email" defaultValue="CHATjam@gmail.com" />
            </div>
            <div className="form-group-inline">
              <label>รหัสผ่านเก่า :</label>
              <input type="password" defaultValue="CHATjam1234" />
            </div>
            <div className="form-group-inline">
              <label>รหัสผ่านใหม่ :</label>
              <input type="password" defaultValue="CHATjam111111" />
            </div>
            <div className="form-group-inline">
              <label>ยืนยันรหัสผ่าน :</label>
              <input type="password" defaultValue="CHATjam111111" />
            </div>
        </form>

        <div className="button-group">
          <button type="submit" className="save-button">SAVE</button>
          <button type="button" className="cancel-button">CANCEL</button>
        </div>

    </div>
      
    );
}

export default EditProfileScreen;
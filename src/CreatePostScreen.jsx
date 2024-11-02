import './CreatePostScreen.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function CreatePostScreen() {

  const [value, setValue] = useState("Type Here!")

  return (
    <div className="create-new-container">
            <div className="header">
                <h2>CREATE NEW</h2>
                <div className="header-buttons">
                    <span className="cancel">CANCEL</span>
                    <span className="save">SAVE</span>
                    <span className="public">PUBLIC</span>
                </div>
            </div>

            <div className="input-container">
                <div className="input-group">
                    <label>Title :</label>
                    <input type="text" className="input-field" placeholder="ใส่หัวข้อ" />
                </div>
                <div className="input-group">
                    <label>Category :</label>
                    <div className="dropdown">
                        <select className="dropdown-select">
                            <option>สัตว์เลี้ยง</option>
                            <option>เทคโนโลยี</option>
                            <option>ข่าวสาร</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <label>Content :</label>
                <textarea className="content-field" placeholder="พิมพ์เนื้อหาได้ที่นี่..."></textarea>
            </div>
        </div>
  );
}

export default CreatePostScreen;

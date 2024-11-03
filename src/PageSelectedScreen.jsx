import './App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";

function PageSelectedScreen() {

  const [value, setValue] = useState("Type Here!")

  return (
    <div className="App">
      <div className="selected-box">
        <div className="selected-text">
            <p className='Typed-text'>img</p>
            <button className='Arrange-text'>Recently Board▼</button>
        </div>        
        <div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div>
        <div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div><div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div><div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div><div className="selected-content-container">
            <div className='selected-content'>
              <h3>หัวข้อ</h3>
              <p>เนื้อหา</p>
            </div>
            <div className='selected-like-button-container'>
              <div className='selected-like-button'>
                <button></button>
                <p>like count</p>
                <button></button>
                <p>dislike count</p>
              </div>
              <div>user name</div>
            </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default PageSelectedScreen;

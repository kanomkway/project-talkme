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

function MainScreen() {

  const [value, setValue] = useState("Type Here!")

  const navigate = useNavigate();

  const gotoGeneralTopic=()=>{
    navigate('/general-p');
  }

  const gotoMusicTopic=()=>{
    navigate('/music-p');
  }

  const gotoPetTopic=()=>{
    navigate('/pet-p');
  }

  const gotoFoodTopic=()=>{
    navigate('/food-p');
  }

  const gotoTravelTopic=()=>{
    navigate('/travel-p');
  }

  return (
    <div className="App">
      <div className="box">
        <div className="mainS-button-container">
            <button className="mainS-button" onClick={gotoGeneralTopic}>
              <img src='src/img/ปุ่มหมวดทั่วไป.png'/>
            </button>
            <button className="mainS-button" onClick={gotoMusicTopic}>
              <img src='src/img/ปุ่มหมวดเพลง.png'/>
            </button>
            <button className="mainS-button" onClick={gotoPetTopic}>
              <img src='src/img/ปุ่มหมวดสัตว์เลี้ยง.png'/>
            </button>
            <button className="mainS-button" onClick={gotoFoodTopic}>
              <img src='src/img/ปุ่มหมวดอาหาร.png'/>
            </button>
            <button className="mainS-button" onClick={gotoTravelTopic}>
              <img src='src/img/ปุ่มหมวดท่องเที่ยว.png'/>
            </button>
        </div> 
      </div>
      <div className="mainS">
        <p className='mainS-text'>Recently Board</p>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
        <div className="mainS-content-container">
            <div className="mainS-img-content">
                a
            </div>
            <div className="mainS-content">
                a
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;

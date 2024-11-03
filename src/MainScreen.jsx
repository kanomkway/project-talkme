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
            <button className="mainS-button" onClick={gotoGeneralTopic}>a</button>
            <button className="mainS-button" onClick={gotoMusicTopic}>b</button>
            <button className="mainS-button" onClick={gotoPetTopic}>c</button>
            <button className="mainS-button" onClick={gotoFoodTopic}>d</button>
            <button className="mainS-button" onClick={gotoTravelTopic}>e</button>
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

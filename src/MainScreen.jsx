import './App.css';
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";
import axios from 'axios';

function Item(props) {
  return (
    <div key={props.id} className="post">
      <h3>
        # {props.id} &nbsp;{props.title}
      </h3>
      <div className="long-tex">เนื้อหา: {props.content}</div>
      <br />
    </div>
  );
}

function MainScreen() {

  const [value, setValue] = useState("Type Here!")
  const [content,setContent] = useState([]);

  const URL = "http://localhost:5000";
  useEffect(()=>{
    axios
    .get(URL+'/')
    .then(response=>{
      setContent(response.data);
      console.log(response.data);
    })
    .catch(error=>{
      console.log("error!");
    })
    return ()=>{

    }}
    ,[])

  const navigate = useNavigate();

  const gotoGeneralTopic=()=>{
    navigate('/general-p');
  }

  const gotoMusicTopic=()=>{
    navigate('/music-p');
  }

  const gotoFoodTopic=()=>{
    navigate('/food-p');
  }

  const handleNavigate=(item)=>{
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    const con={
      id: item.id,
      title: item.title,
      cont:item.content,
      tag:item.tag
    }
    navigate('/content',{state:con});
    console.log(con)
  };

  const getImageByTag = (tag) => {
    if (tag === 'general') {
      return 'src/img/ปุ่มหมวดทั่วไป.png';
    } else if (tag === 'food') {
      return 'src/img/ปุ่มหมวดอาหาร.png';
    } else if (tag === 'music') {
      return 'src/img/ปุ่มหมวดเพลง.png';
    }
    return ''; // กรณีไม่มี tag ที่ตรงกัน
  };

  const contentList = content?.map((item, index) => (
      <div className="mainS-content-container" key={index} onClick={() => handleNavigate(item)}>
        <div className="mainS-img-content">
          <img src={getImageByTag(item.tag)}/>
          {console.log(item)}
        </div>
        <div className="mainS-content">
          <h2>{item.title}</h2>
          {item.content}
        </div>
      </div>
  ));
  

  return (
    <div className="App">
      <div className="box">
        <div className="mainS-button-container">
            <button className="mainS-button" onClick={gotoGeneralTopic}>
              <img src='src/img/ปุ่มหมวดทั่วไป.png'/>
            </button>
            <button className="mainS-button" onClick={gotoFoodTopic}>
              <img src='src/img/ปุ่มหมวดอาหาร.png'/>
            </button>
            <button className="mainS-button" onClick={gotoMusicTopic}>
              <img src='src/img/ปุ่มหมวดเพลง.png'/>
            </button>
        </div> 
      </div>
      <div className="mainS">
        <p className='mainS-text'>Recently Board</p>
        {contentList}
      </div>
    </div>
  );
}

export default MainScreen;

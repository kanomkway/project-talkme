import "./MyBoardScreen.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Routes, Route, useNavigate, NavLink, Link } from "react-router-dom";

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

function MusicPage() {
  const [value, setValue] = useState("Type Here!");
  const [content, setContent] = useState([]);

  const navigate = useNavigate();

  const URL = "http://localhost:5000";
  useEffect(() => {
    axios
      .get(URL + "/api/music")
      .then((response) => {
        setContent(response.data);
        console.log(content);
      })
      .catch((error) => {
        console.log("error");
        console.log(URL + "/api/music");
      });
  }, []);

  const handleNavigate=(item)=>{
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    const con={
      id: item.id,
      title: item.title,
      tag:item.tag
    }
    navigate('/content',{state:con});
    console.log(con)
  };

  const contentList = content?.map((item, index) => (
    <div className="post" key={index} onClick={() => handleNavigate(item)}>
      <div className="mainS-content">
      <h2>
        #{item.id} &nbsp;{item.title}
      </h2>
        {item.content}
      </div>
    </div>
));
  return (
    <main className="main-content">
      <div className="tag-header">
        <h2>TAG : MUSIC</h2>
      </div>

      <div className="post-container">
        <select
          className="dropdown-select"
          style={{ marginLeft: "auto", width: "150px" }}
        >
          <option style={{}}>Recently Board</option>
        </select>
        <br />
        <div>{contentList}</div>
      </div>
    </main>
  );
}

export default MusicPage;

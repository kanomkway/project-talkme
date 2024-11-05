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

function GeneralPage() {
  const [value, setValue] = useState("Type Here!");
  const [content, setContent] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");

  const navigate = useNavigate();

  const URL = "http://localhost:5000";
  useEffect(() => {
    axios
      .get(URL + "/api/general")
      .then((response) => {
        setContent(response.data);
        console.log(content);
      })
      .catch((error) => {
        console.log("error");
        console.log(URL + "/api/general");
      });
  }, []);

  const handleNavigate = (item) => {
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    const con = {
      id: item.id,
      title: item.title,
      cont: item.content,
      tag: item.tag,
    };
    navigate("/content", { state: con });
    console.log(con);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedContent = content?.sort((a, b) => {
    if (sortOrder === "recent") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  const contentList = sortedContent?.map((item, index) => (
    <div className="post" key={index} onClick={() => handleNavigate(item)}>
      <div className="mainS-content">
        <h2>
          #{item.id} &nbsp;{item.title}
        </h2>
        {item.content}
        <div
          style={{
            marginLeft: "1580px",
            textAlign: "right",
            marginTop: "10px",
          }}
        >
          {item.username}
        </div>
      </div>
    </div>
  ));

  return (
    <main className="main-content">
      <div className="tag-header">
        <h2>TAG : GENERAL</h2>
      </div>

      <div className="post-container">
        <select
          className="dropdown-select"
          style={{ marginLeft: "auto", width: "150px" }}
          onChange={handleSortChange}
        >
          <option value="recent">Recently Board</option>
          <option value="oldest">Oldest Board</option>
        </select>
        <br />
        <div>{contentList}</div>
      </div>
    </main>
  );
}

export default GeneralPage;

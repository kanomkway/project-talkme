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
  const [con, setCon] = useState([]);

  const navigate = useNavigate();

  const URL = "http://localhost:5000";
  useEffect(() => {
    axios
      .get(URL + "/api/general")
      .then((response) => {
        setCon(response.data);
        console.log(con);
      })
      .catch((error) => {
        console.log("error");
        console.log(URL + "/api/general");
      });
  }, []);

  const contentList = con.map((item) => <Item {...item} />);

  return (
    <main className="main-content">
      <div className="tag-header">
        <h2>TAG : GENERAL</h2>
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

export default GeneralPage;

import "./MyBoardScreen.css";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const URL = "http://localhost:5000";
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/search?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data received from backend:", data);
        setResults(data);
      })
      .catch((err) => console.error("Error fetching search results:", err));
  }, [query]);

  return (
    <div style={{ marginTop: "50px", marginLeft: "80px" }}>
      <h2>ผลการค้นหาสำหรับ: "{query}"</h2>
      <div className="post-search">
        {results.map((item, index) => (
          <div key={index}>
            <h3>
              # {item.id} &nbsp;{item.title}
            </h3>
            <div className="long-tex">เนื้อหา: {item.content}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

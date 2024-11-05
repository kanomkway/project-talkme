import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaHashtag, FaSearch } from "react-icons/fa";
import {
  BsClipboard2PlusFill,
  BsFillClipboard2HeartFill,
  BsFillClipboard2PulseFill,
} from "react-icons/bs";
import Swal from "sweetalert2";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const userName = localStorage.getItem("name");
  const userID = localStorage.getItem("id");
  const [value, setValue] = useState("");

  const navbarItems = [
    {
      path: "/profile",
      label: "Profile",
      icon: <FaUser size={24} />,
    },
    {
      path: "/tags",
      label: "Tags",
      icon: <FaHashtag size={24} />,
    },
    {
      path: "/my_board",
      label: "My Board",
      icon: <BsClipboard2PlusFill size={24} />,
    },
    // {
    //   path: "/participate_board",
    //   label: "Participate Board",
    //   icon: <BsFillClipboard2PulseFill size={24} />,
    // },
    {
      path: "/followed_board",
      label: "Followed Board",
      icon: <BsFillClipboard2HeartFill size={24} />,
    },
  ];

  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 800) {
  //       setNavbarCollapsed(true);
  //     } else {
  //       setNavbarCollapsed(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleSearch = () => {
    console.log(value);
    if (value.trim()) {
      navigate(`/search?query=${encodeURIComponent(value)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="head">
        <a href="/">
          <img
            className="pointer"
            style={{ marginLeft: 30 }}
            align="left"
            src="src/img/logo.png"
            width={100}
            alt="logo"
          ></img>
        </a>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={value}
            placeholder="พิมพ์ที่นี่"
            onFocus={() => setValue("")}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <FaSearch onClick={handleSearch} className="search-icon" />
        </div>
        <a href="/login">
          <button className="log-button pointer">เข้าสู่ระบบ / Log In</button>
        </a>
      </div>

      <nav className="navbar">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`navbar-item ${pathname === item.path ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

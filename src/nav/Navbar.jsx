import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHashtag,
  BsClipboard2PlusFill,
  BsFillClipboard2HeartFill,
  BsFillClipboard2PulseFill,
  FaSearch
} from "react-icons/fa";
import Swal from "sweetalert2";
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const userName = localStorage.getItem("name");
    const userID = localStorage.getItem("id");
    const [value, setValue] = useState("Type Here!")

    const navbarItems = [
        {
          path: "/userinfo",
          label: "Profile",
          icon: <FaUser size={20} />,
        },
        {
          path: "/tags",
          label: "Tags",
          icon: <FaHashtag size={20} />,
        },
        {
          path: "/my_board",
          label: "My Board",
          icon: <BsClipboard2PlusFill size={20} />,
        },
        {
          path: "/participate_board",
          label: "Participate Board",
          icon: <BsFillClipboard2PulseFill size={20} />,
        },
        {
          path: "/followed_board",
          label: "Followed Board",
          icon: <BsFillClipboard2HeartFill size={20} />,
        },
      ]

    const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
    const Nav = useNavigate();

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

    return (
    <>
      <div className="head">
        <img className='pointer' style={{marginLeft: 30}} align="left" src="src/nav/logo.png" width={100} alt="logo"></img>
        <input className='head-input' type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <FaSearch onClick={()=>alert("TRY")} className='pointer' type='submit' value="Submit" style={{fontSize: 30, marginTop: 30}} />
        <button className='log-button pointer'> เข้าสู่ระบบ / Log In </button>
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
}

export default Navbar;
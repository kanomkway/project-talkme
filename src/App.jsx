import './App.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  useNavigate,
  NavLink,
  Link,
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import MainScreen from './MainScreen';
import PageSelectedScreen from './PageSelectedScreen';
import TagScreen from './TagScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/userinfo" element={<ProfileScreen/>}/>
        <Route path="/tags" element={<TagScreen />} />
        <Route path="/editProfile" element={<EditProfileScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;

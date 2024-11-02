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
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen'
import PageSelectedScreen from './PageSelectedScreen';
import TagScreen from './TagScreen';
import ProfileScreen from './ProfileScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/tags" element={<TagScreen />} />
      </Routes>
    </Router>
  )
}

export default App;

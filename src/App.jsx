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


import EditProfileScreen from './EditProfileScreen';

import MyBoardScreen from './MyBoardScreen';
import CreatePostScreen from './CreatePostScreen';

import FollowedBoardScreen from './FollowedBoardScreen';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/tags" element={<TagScreen />} />

        <Route path="/editProfile" element={<EditProfileScreen />}/>

        <Route path="/my_board" element={<MyBoardScreen />} />

        <Route path="/followed_board" element={<FollowedBoardScreen/>} />

        <Route path="/general-p" element={<PageSelectedScreen/>}/>
        <Route path="/music-p" element={<PageSelectedScreen/>}/>
        <Route path="/pet-p" element={<PageSelectedScreen/>}/>
        <Route path="/food-p" element={<PageSelectedScreen/>}/>
        <Route path="/travel-p" element={<PageSelectedScreen/>}/>

        <Route path="/create-p" element={<CreatePostScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;

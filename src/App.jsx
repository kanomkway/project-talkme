import "./App.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import MainScreen from "./MainScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import PageSelectedScreen from "./PageSelectedScreen";
import TagScreen from "./TagScreen";
import GeneralPage from "./GeneralPage";

import EditProfileScreen from "./EditProfileScreen";

import MyBoardScreen from "./MyBoardScreen";
import CreatePostScreen from "./CreatePostScreen";
import ParticipatedScreen from "./ParticipatedScreen";
import FollowedBoardScreen from "./FollowedBoardScreen";
import MusicPage from "./MusicPage";
import FoodPage from "./FoodPage";
import ContentScreen from "./ContentScreen";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/tags" element={<TagScreen />} />
        <Route path="/participate_board" element={<ParticipatedScreen />} />
        <Route path="/content" element={<ContentScreen />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/editProfile" element={<EditProfileScreen />} />

        <Route path="/general-p" element={<GeneralPage />} />
        <Route path="/food-p" element={<FoodPage />} />
        <Route path="/music-p" element={<MusicPage />} />

        <Route path="/my_board" element={<MyBoardScreen />} />

        <Route path="/followed_board" element={<FollowedBoardScreen />} />

        <Route path="/create-p" element={<CreatePostScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

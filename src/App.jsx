import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import Login from './Login'
import ThinkManage from './ThinkManage'
import Contact from './Contact'
import AboutUs from './AboutUs'
import DynamicTopics from './DynamicTopics'




function App() {
  
  
  return (

    
    <BrowserRouter>
    <nav>
     <Link to="/">Homepage</Link> |
     <Link to="/login">Login</Link> |
    <Link to="/thinkmanage">Think Manage</Link> |
    <Link to="/comment">Comment</Link> |
    <Link to="/contact">Contact</Link> |
    <Link to="/aboutus">About Us</Link> |
    </nav>

    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/thinkmanage" element={<ThinkManage />}>
    <Route path="dynamictopics" element={<DynamicTopics />} />
    </Route>
    <Route path="/comment" element={<Comment />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
       
  );
};

export default App;











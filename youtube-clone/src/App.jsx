import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Video from "./pages/Video/Video"
import { useState } from "react"
import dotenv from 'dotenv';

const App = () => {

const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>    
      </div>
  )
}

export default App

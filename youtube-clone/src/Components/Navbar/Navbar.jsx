import React from "react"
import "./Navbar.css"
import { useState } from "react"
import home from "../../assets/home.png"
import Sidebar from "./Sidebar/Sidebar"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const Navbar = ({setSidebar}) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                 <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={home} alt=""/>
                <Link to="/"><img className="logo" src={home} alt=""/></Link>
            </div>

            <div className="nav-middle flex-div">
                <input type="text" placeholder="Search"/>
                <img src="" alt=""/>
            </div>    

            <div className="nav-right flex-div">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt=""className="user-icon"/>
            </div> 
        </nav>
    )
}

export default Navbar
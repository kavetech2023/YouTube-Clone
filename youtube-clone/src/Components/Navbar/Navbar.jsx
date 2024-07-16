import React from "react"
import "./Navbar.css"
import { useState } from "react"
import { CgDetailsMore } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import { BsToggle2Off } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import home from "../../assets/profile.jpg"
import Sidebar from "./Sidebar/Sidebar"
import { Link } from "react-router-dom"
import { useEffect } from "react"


const Navbar = ({setSidebar}) => {

    const switchTheme = (e) => {
        if(e.target.checked){
            document.querySelector("body").setAttribute("data-theme","dark")
    }else{
        document.querySelector("body").setAttribute("data-theme","light")
    }}

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <span className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)}><CgDetailsMore size={30}/></span>
                <Link to="/"><FaYoutube  size={40} color="red"/></Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                <input type="text" placeholder="Search"/>
                <span><FaSearch /></span>
                </div>
                
            </div>    

            <div className="nav-right flex-div">
                <span>
<label class="switch">
  <input type="checkbox" onChange={switchTheme}/>
  <span className="slider round"></span>
</label></span>
                
                <img src={home} alt=""className="user-icon"/>
            </div> 
        </nav>
    )
}

export default Navbar
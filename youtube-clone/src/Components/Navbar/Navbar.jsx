import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" src={menu_icon} alt=""/>
                <img className="logo" src={logo} alt=""/>
            </div>

            <div className="nav-middle flex-div">
                <input type="text" placeholder="Search"/>
                <img src={search_icon} alt=""/>
            </div>    

            <div className="nav-right flex-div">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div> 
        </nav>
    )
}

export default Navbar
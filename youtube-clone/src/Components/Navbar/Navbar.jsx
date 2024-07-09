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

            </div>    
        </nav>
    )
}

export default Navbar
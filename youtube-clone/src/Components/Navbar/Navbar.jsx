import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                 <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src="" alt=""/>
                <img className="logo" src="" alt=""/>
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
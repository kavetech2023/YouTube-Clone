import react from "react"
import "./Sidebar.css"
import { IoHome } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";

import sports from "../../../assets/home.png"



const Sidebar = ({sidebar,category,setCategory}) => {
    return (
        <div>
          <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <span> <IoHome className="side-icon" size={20}/></span>
                    <p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <span><SiYoutubegaming className="side-icon" size={20}/></span>
                    <p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <span><FaCarSide className="side-icon" size={20}/></span>
                    <p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <span><MdOutlineSportsSoccer className="side-icon"  size={20}/></span>
                    <p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <span><MdLocalMovies className="side-icon" size={20}/></span>
                    <p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <span><GiMaterialsScience size={20}/></span>
                    <p>Sci & Tech</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <span><IoIosMusicalNotes className="side-icon" size={20}/></span>
                    <p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <span><IoPeopleSharp size={20}/></span>
                    <p>People & Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <span><LuNewspaper className="side-icon" size={20}/></span>
                    <p>News</p>
                </div>  
                <hr/>

                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={sports} alt=""/>
                        <p>Nobody Man</p>
                    </div>
                    <div className="side-link">
                        <img src={sports} alt=""/>
                        <p>Mr Home</p>
                    </div>
                    
                </div>
            </div>
          </div>  
        </div>
    )
}

export default Sidebar
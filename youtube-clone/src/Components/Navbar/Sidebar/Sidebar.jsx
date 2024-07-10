import react from "react"
import "./Sidebar.css"
import home from "../../../assets/home.png"
import game_icon from "../../../assets/home.png"
import automobiles from "../../../assets/home.png"
import sports from "../../../assets/home.png"
import entertainment from "../../../assets/home.png"
import tech from "../../../assets/home.png"
import music from "../../../assets/home.png"
import blogs from "../../../assets/home.png"
import news from "../../../assets/home.png"


const Sidebar = ({sidebar}) => {
    return (
        <div>
          <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Home</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Home</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Tech</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Music</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={home} alt=""/>
                    <p>News</p>
                </div>  
                <hr/>

                <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="side-link">
                        <img src={home} alt=""/>
                        <p>Home</p>
                    </div>
                    <div className="side-link">
                        <img src={home} alt=""/>
                        <p>Home</p>
                    </div>
                    <div className="side-link">
                        <img src={home} alt=""/>
                        <p>Home</p>
                    </div>
                </div>
            </div>
          </div>  
        </div>
    )
}

export default Sidebar
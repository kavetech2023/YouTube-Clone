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


const Sidebar = ({sidebar,category,setCategory}) => {
    return (
        <div>
          <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt=""/>
                    <p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={home} alt=""/>
                    <p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={home} alt=""/>
                    <p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={home} alt=""/>
                    <p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={home} alt=""/>
                    <p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={home} alt=""/>
                    <p>Sci & Tech</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={home} alt=""/>
                    <p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={home} alt=""/>
                    <p>People & Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
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
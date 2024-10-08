import React from "react"
import "./Home.css"
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar"
import Feed from "../../Components/Feed/Feed"
import { useState } from "react"

const Home = ({sidebar}) => {

    const [category, setCategory] = useState(0);
    return (
        // Display Sidebar and Feed
        <>
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
        <div className={`container ${sidebar?"":"large-container"}`}>
            <Feed category={category}/>
        </div>   
        </>
    )
    }   

export default Home
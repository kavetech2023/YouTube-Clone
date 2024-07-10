import React from "react"
import "./Home.css"
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar"

const Home = ({sidebar}) => {
    return (
        <>
        <Sidebar sidebar={sidebar}/>
        </>
    )
    }   

export default Home
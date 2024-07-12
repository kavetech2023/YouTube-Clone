import React from "react"
import "./Feed.css"
import { Link } from "react-router-dom"

const Feed = () => {
    return (
        <div className="feed">
            <Link to={`video/12/2`} className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </Link>    
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className="card">
                <img src="" alt=""/>
                <h2>Best channel to learn coding </h2>
                <h3>Great stack</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
        </div>
    )
}

export default Feed
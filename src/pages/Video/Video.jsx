import React from "react"
import "./Video.css"
import PlayVideo from "../../Components/PlayVideo/PlayVideo"
import Recommended from "../../Components/Recommended/Recommended"
import { useParams } from "react-router-dom"

const Video = () => {
    // Fetching Video ID and Category ID from URL
    const  {videoId, categoryId} = useParams()
    return (
        <div className="play-container">
            <PlayVideo videoId={videoId}/>
            <Recommended categoryId={categoryId}/>
        </div>
    )
}

export default Video
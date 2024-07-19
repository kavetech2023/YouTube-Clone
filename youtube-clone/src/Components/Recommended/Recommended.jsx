import React from 'react'
import "./Recommended.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { API_KEY, value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([]);

    // Fetching Recoomended Videos from Youtube API
    const fetchData = async () => {
       const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
       await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }
    // Fetching Data on Component Mount
    useEffect(() => {
      fetchData();
    },[])

  return (
    // Display Recommended Videos in a list
    <div className='recommended'>
        {apiData.map((item,index)=>{
          return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
            </Link>
            
          )
        })}
        </div>
        )
        
}

export default Recommended
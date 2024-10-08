import React, { useEffect } from "react";
import "./PlayVideo.css";
import { useState } from "react";
import { API_KEY, value_converter } from "../../data.js";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
    // Fetching Video ID from URL
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
         // Fetching Videos Data from Youtube API
         const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
         await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));

         //fetch comments data from youtube api
         const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
         await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items));
    }
    
    const fetchChannelData = async () => {
        // Fetching Channel Data from Youtube API
        const channelDetails_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDetails_url).then(res => res.json()).then(data => setChannelData(data.items[0]));
    }
    // Fetching Data on Component Mount
    useEffect(() => {
        fetchVideoData()
    },[videoId])

    // Fetching Data on Component Mount
    useEffect(() => {
        fetchChannelData()
    },[apiData])


    return (
        // Display Video Player and Video Details
        <div className="play-video">
            <iframe className="new-iframe" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} controls autoPlay muted></iframe>
            <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
         <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"100K"} Views &bull; {moment(apiData?apiData.snippet.publishedAt:"").fromNow()}</p>
            <div>
                <span><img src=""/>{apiData?value_converter(apiData.statistics.likeCount):170}</span>
                <span><img src=""/>{apiData?value_converter(apiData.statistics.likeCount):170}</span>
                <span><img src=""/>{apiData?value_converter(apiData.statistics.likeCount):170}</span>
                <span><img src=""/>{apiData?value_converter(apiData.statistics.likeCount):170}</span>
            </div>
            </div>
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>{channelData?value_converter(channelData.statistics.subscriberCount):"5K"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
                <div className="video-description">
                    <p>{apiData?apiData.snippet.description.slice(0,250):"Video Description"}</p>
                    <hr/>
                    <h4>{apiData?value_converter(apiData.statistics.commentCount):100} comments</h4>
                    {commentData.map((item,index)=>{
                        return(
                            <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                    
                                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                        <div className="comment-action">
                                        <img src="" alt="" />
                                        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                        <img src="" alt="" /> 
                                        </div>              
                                </div>
                        </div>

                        )

                    })}
                  
                </div>
            </div>
    );
};

export default PlayVideo;


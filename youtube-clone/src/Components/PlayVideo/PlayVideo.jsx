import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/sample.mp4"

const PlayVideo = () => {
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted></video>
            <h3>Best Youtube Channel to learn Web developent</h3>
         <div className="play-video-info">
            <p>1525 Views &bull; 2 days</p>
            <div>
                <span><img src=""/>125</span>
                <span><img src=""/>125</span>
                <span><img src=""/>125</span>
                <span><img src=""/>125</span>
            </div>
            </div>
            <div className="publisher">
                <img src="" alt="" />
                <div>
                    <p>Great Stack</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
                <div className="video-description">
                    <p>Channel that makes learning easy.</p>
                    <p>Subscribe to Great stack to watch More tutorials on web development.</p>
                    <hr/>
                    <h4>130 comments</h4>
                    <div className="comment">
                        <img src="" alt="" />
                        <div>
                            <h3>Jack Nickelson <span>1 day ago</span></h3>
                                
                                <p>A global computer network providing a variety of information about
                                    business, culture, sports, science, and miscellaneous other subjects,
                                    access to the World Wide Web, and email.</p>
                                    <div className="comment-action">
                                    <img src="" alt="" />
                                    <span>244</span>
                                    <img src="" alt="" /> 
                                    </div>              
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default PlayVideo;


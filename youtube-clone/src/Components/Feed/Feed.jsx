import React, { useEffect, useState  } from "react"
import "./Feed.css"
import { Link } from "react-router-dom"
import { API_KEY, value_converter } from "../../data.js"
import moment from "moment"
import run from "../../config/gemini.js"






const Feed = ({category}) => {

  //Modal start
const [modal, setModal] = useState(true);
const [moreInfoData, setMoreInfoData] = useState(null);

const toggleModal = () => {
  setModal(!modal);
};
//Modal ends here

const [resultData, setResultData] = useState([]);


const handleMoreInfo = async (channelTitle) => {
    setModal(true);
    try {
      const processedData = await run("Explain to me " + channelTitle + "on youtube very briefly");
      setMoreInfoData(processedData);
      
    } catch (error) {
      console.error("Error processing data:", error);
      // Handle errors gracefully (e.g., display an error message)
    }
  };





    const [data, setData] = useState([])

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData()
    },[category])
    return (
        <div className="feed">
<div className={`modal ${modal ? "show" : ""}`}>
<div onClick={toggleModal} className="overlay"></div>
<div className="modal-content">
  <h2>Welcome to Youtube with Gemini Ai</h2>
  <p>
            {moreInfoData ? (
              <span dangerouslySetInnerHTML={{ __html: moreInfoData }} /> // Safely render processed HTML
            ) : (
              "No additional information available yet"
            )}
          </p>
  <button className="close-modal" onClick={toggleModal}>

    CLOSE
  </button>
</div>
</div>

            {data.map((item, index)=> {
        return(
            <div className="card" key={item.id}>
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} >
            <img src={item.snippet.thumbnails.medium.url} alt=""/>
            </Link>
            <h2 onClick={toggleModal}>{item.snippet.title}</h2>
            <h3 onClick={() => handleMoreInfo(item.snippet.channelTitle)}>
            {item.snippet.channelTitle}
          </h3>
            <p>{value_converter(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </div>

        )
    })}
               
        </div>
    )
}

export default Feed

import { useState, useEffect} from "react"
import Snowboard from "../data"
import ResultError from "../Components/errors/ResultsError"
import Video from "./Video"
import {getYoutubeVideos} from '../api/fetch'

import "./home.css"

export default function Home () {
const [youtube , setYoutube] = useState([])
//  const [resultError, setResultError] = useState(false)
const [search, setSearch] = useState("");


useEffect(() => {
   getYoutubeVideos(search)
     .then((response) => {
         setYoutube(response.items);

       })
       .catch((error) => {

       });
   }, [search]);

   

   function handleTextChange(event) {
    const title = event.target.value;
  
  
    setSearch(title);

  
  }
//   console.log(youtube)
//   console.log(search)
    return (
        <div className="search-feature">
           <input
            className="search"
            type="text"
            placeholder="Search..."
            onChange={handleTextChange}/>
            
            <button>Submit</button>
        <div>
            <br></br>
            <br></br>

            {!search ? (null):(
            <div className="thumbnails">
                
       
        {
           youtube.map((yt) => {
               return (
                   <Video key={yt.id.videoId} yt={yt}/>
               )
           })
        }
            </div>
            )}
        </div>
        </div>
    )
}



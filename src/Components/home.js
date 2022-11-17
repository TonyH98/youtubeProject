import { useState} from "react"
import Snowboard from "../data"
import ResultError from "../Components/errors/ResultsError"
import Video from "./Video"
import {getYoutubeVideos} from '../api/fetch'

import "./home.css"

export default function Home () {
const [youtube , setYoutube] = useState([])
//  const [resultError, setResultError] = useState(false)
const [search, setSearch] = useState("");



// this function calls the fetch with the search results, sets the results.items into the youtube array.
   function getResults(){
    getYoutubeVideos(search)
     .then((response) => {
         setYoutube(response.items);

       })
       .catch((error) => {

       });

   }

  // this function gets the value that the user typed in the search bar and sets it to the search state  
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
            
            <button onClick={() => getResults()}>Submit</button>
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



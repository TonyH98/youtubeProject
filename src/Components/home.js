
import { useState, useEffect} from "react"

import ResultError from "../Components/errors/ResultsError"
import Video from './Components/Video'
import "./home.css"

import {getYoutubeVideos} from '../api/fetch'

export default function Home () {
const [youtube , setYoutube] = useState([])
const [resultError, setResultError] = useState(false)

useEffect(() => {
    getYoutubeVideos()
      .then((response) => {
          setYoutube(response);
          
        })
        .catch((error) => {
            
        });
    }, []);
    
    console.log(youtube)
    return (
        <div className="search-feature">
            <input
            type="text"
            placeholder="Search...">
            </input>
            <button>Submit</button>
        <div>
            <br></br>
        {!resultError ? (<ResultError/> ): null}
        </div>
        </div>
    )
}
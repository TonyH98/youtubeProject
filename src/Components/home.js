import YouTube from "react-youtube"
import { useState, useEffect } from "react"
import {getYoutubeVideos} from "../api/fetch"

export default function Home () {
const [youtube , setYoutube] = useState([])

useEffect(() => {
getYoutubeVideos()
.then(res => {
setYoutube(res)
})
}, [])

console.log(youtube)


    return (
        <div className="search-feature">
            <input
            type="text"
            placeholder="Search...">
            </input>
            <button>Submit</button>
        </div>
    )
}
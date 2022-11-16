 import { useState} from "react"
 import Snowboard from "../data"
import ResultError from "../Components/errors/ResultsError"
 import Video from "./Video"

 import "./home.css"

 export default function Home () {
 const [youtube , setYoutube] = useState([Snowboard])
//  const [resultError, setResultError] = useState(false)


    
     return (
         <div className="search-feature">
            <input
             className="search"
             type="text"
             placeholder="Search...">
             </input>
             <button>Submit</button>
         <div>
             <br></br>
         {
            youtube.map((yt) => {
                return (
                    <Video yt={yt}/>
                )
            })
         }
         </div>
         </div>
     )
 }



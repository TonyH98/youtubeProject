
import { useState} from "react"

import ResultError from "../Components/errors/ResultsError"
import "./home.css"


export default function Home () {
const [youtube , setYoutube] = useState([])
const [resultError, setResultError] = useState(false)




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
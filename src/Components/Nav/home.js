import { useState, useRef, useEffect} from "react"
import ReactPaginate from "react-paginate";
import ResultError from "../errors/ResultsError"
import Video from "../Video/Video"
import {getYoutubeVideos} from '../../api/fetch'

import "./home.css"

const pageData = 3

export default function Home () {
const [youtube , setYoutube] = useState([])
const [currentPage, setCurrentPage] = useState(0)
const [resultError, setResultError] = useState(false)
const [search, setSearch] = useState("");
const [storedResults, setStoredResults] = useState([])

const ref = useRef(null)

// this function calls the fetch with the search results, sets the results.items into the youtube array.

// this function gets the value that the user typed in the search bar and sets it to the search state  
function handleTextChange(event) {
  let title = event.target.value; 
  setSearch(title)
}



function getResults(){
 if (search.length > 0){
 getYoutubeVideos(search)
  .then((response) => {
    setSearch("")
      setYoutube(response.items);
      setResultError(true)
      ref.current.value = ''
    })
    .catch((error) => {

    });

 }
}


  useEffect(() => {
    localStorage.setItem('stored-results', JSON.stringify(youtube));
    }, [youtube]);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('stored-results'));
        if (storedResults) {
         setStoredResults(items);
        }
      }, [youtube]);

function handlePageChange ({selected: selectedPage}){
  setCurrentPage(selectedPage)
}
const offSet = currentPage * pageData

const currentPageData = storedResults
.slice(offSet, offSet + pageData)
.map((yt) => <Video key={yt.id.videoId} yt={yt}/>)

const pageCount = Math.ceil(youtube.length/pageData) 



    return (
        <div className="search-feature">
           <input
           ref={ref}
           autoComplete = "off"
            className="search"
            type="text"
            placeholder="Search..."
            onChange={handleTextChange}/>
            
            <button onClick={() => getResults()}>Submit</button>
        <div>
            <br></br>
            <br></br>
            {currentPageData.length === 0 ? null :

            <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={handlePageChange}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination-link"}
         nextLinkClassName={"pagination-link"}
         />  
            }
        
         {!resultError ? (<ResultError/>):(
            <div className="thumbnails">
       
        {
           currentPageData
        }
            </div>
            )}
        </div>
        </div>
    )
}
import { useState} from "react"
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



// this function calls the fetch with the search results, sets the results.items into the youtube array.
   function getResults(){
    if (search.length > 0){
    getYoutubeVideos(search)
     .then((response) => {
         setYoutube(response.items);
         setResultError(true)
       })
       .catch((error) => {

       });

    }
   }

  // this function gets the value that the user typed in the search bar and sets it to the search state  
   function handleTextChange(event) {
    const title = event.target.value;
    setSearch(title)
  
  }
//   console.log(youtube)


function handlePageChange ({selected: selectedPage}){
    setCurrentPage(selectedPage)
  }
  const offSet = currentPage * pageData
  
  const currentPageData = youtube
  .slice(offSet, offSet + pageData)
  .map((yt) => <Video key={yt.id.videoId} yt={yt}/>)
  
  const pageCount = Math.ceil(youtube.length/pageData) 



  console.log(search.length)
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
            <ReactPaginate
         previousLabel={"Previous"}
         nextLabel={"Next"}
         pageCount={pageCount}
         onPageChange={handlePageChange}
         containerClassName={"pagination"}
         previousLinkClassName={"pagination-link"}
         nextLinkClassName={"pagination-link"}
         />  
        
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
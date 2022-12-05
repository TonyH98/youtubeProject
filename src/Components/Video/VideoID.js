import { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import Comment from "./Comment"
import CommentData from "./CommentData"
import Form from "./Form"
import YouTube from "react-youtube";
import "./VideoID.css"
import Share from "./share";


export default function VideoID({colors}){   
const {id} = useParams()
let [decrease , setDecrease] = useState(0)
let [like , setLike] = useState(0)
const [show , setShow] = useState(false)
const [comment, setComment] = useState(CommentData)
const [relate , setRelate] = useState([])


const likeIncrease = () => {
    if(decrease >= 0){
      setLike(like + 1)
      setDecrease(decrease - 1)
  
    }
    else if (decrease === 0){
      setDecrease(0)
    }
  }
  
  const decreasebutton = () => {
    if(like >= 0){
        setDecrease(decrease + 1)
        setLike(like - 1)
    }
    else if (like === 0){
        setLike(0)
    }
   
  }
  


function handleComment(comments){
    setComment([...comment, comments])
}
const key = process.env.REACT_APP_YOUTUBE_KEY


const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&video=${id}&key=${key}`

useEffect(() => {
fetch(URL)
.then((res) => res.json())
.then(res => {
    setRelate(res.items)
})
}, [])


return(
    <section className="video-page"> 
        <div>
        <div>
        <YouTube
        videoId={id}
        className={"youtube-video"}
        sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
        />
        <div className="video-buttons">
        <div className="share-div">
            <button className="share-button" onClick={() => setShow(true)}>Share</button>
             <Share  onClose={() => setShow(false)} show={show}/>
        </div>

        <div className="like">
            <button  onClick={likeIncrease} className="like">👍{like}</button>
        </div>
        <div className="dislike">

            <button   onClick={decreasebutton} className="dislike">👎{decrease}</button>
        </div>

        </div>
        </div>
        <br></br>
        <section className="comment-section">
        <Form colors={colors} handleComment={handleComment}/>
        <Comment colors={colors} setComment={setComment}comment={comment}/>
        </section>
        </div>

        <div>

        {relate.map((related) => {
            return(
                <section>
            <div className="title">
            <Link to={`/videos/${related.id.videoId}`}>
            <img className="images" src={related.snippet.thumbnails.medium.url} alt="thumbnail"/>
            </Link>
            <Link to={`/videos/${related.id.videoId}`}>

             <aside style={{textDecorationStyle: "transparent"}}className="youtube-title" >{related.snippet.title}</aside> 
            </Link>
            </div>
        </section>
            )
        })}
        </div>
    </section>
)
}
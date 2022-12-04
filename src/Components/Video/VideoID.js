import { useState , useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import Comment from "./Comment"
import CommentData from "./CommentData"
import Form from "./Form"
import YouTube from "react-youtube";
import "./VideoID.css"

export default function VideoID({colors}){   
const [comment, setComment] = useState(CommentData)
const {id} = useParams()
const [relate , setRelate] = useState([])

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
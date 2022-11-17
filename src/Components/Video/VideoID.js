import { useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment"
import CommentData from "./CommentData"
import Form from "./Form"
import YouTube from "react-youtube";
import "./VideoID.css"

export default function VideoID(){   
const [comment, setComment] = useState(CommentData)
const {id} = useParams()
function handleComment(comments){
    setComment([...comment, comments])
}

return(
    <section>
        <YouTube
        videoId={id}
        className={"youtube-video"}
        />
        <Form handleComment={handleComment}/>
        <Comment comment={comment}/>
    </section>
)
}
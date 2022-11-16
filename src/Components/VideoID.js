import { useState } from "react";
import Comment from "./Comment"
import CommentData from "./CommentData"
import Form from "./Form"

export default function VideoID(){
const [comment, setComment] = useState(CommentData)


function handleComment(comments){
    setComment([...comment, comments])
}

return(
    <section>
        <Form handleComment={handleComment}/>
        <Comment comment={comment}/>
    </section>
)


}
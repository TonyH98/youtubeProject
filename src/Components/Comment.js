import "./Comment.css"
export default function Comment({comment}){ 

    return(
        <section>
            <ul>
            {comment.map((e) => {
                return(
                <li>{e.name}: {e.comm}</li>
                )
            })}
            </ul>
        </section>
    )
}
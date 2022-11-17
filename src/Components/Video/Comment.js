import "./Comment.css"

export default function Comment({comment, setComment}){ 

    const remove = (commentData) => {
        const filter = comment.filter((c) => c !== commentData);
        setComment(filter)
    }

    return(
        <section>
            <ul>
            {comment.map((e) => {
                if(e.name === null || e.comm === null){
                    return (
                        null
                    )
                }
                if(e.name.length > 0 || e.comm.length > 0){
                    return(   
                    <li>
                        <span style={{fontWeight: "bold"}}>{e.name}</span>: {e.comm}
                        <button onClick={() => remove(e)}>Remove</button>
                        </li>
                    )
                }
            })}
            </ul>
        </section>
    )
}
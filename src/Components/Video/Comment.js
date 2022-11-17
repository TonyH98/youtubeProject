import "./Comment.css"
export default function Comment({comment}){ 

    return(
        <section>
            <ul>
            {comment.map((e) => {
                if(e.name === null || e.comm === null){
                    return (
                        null
                    )
                }
                else{

                    return(
                        
                    <li>{e.name}: {e.comm}</li>
                    )
                }
            })}
            </ul>
        </section>
    )
}
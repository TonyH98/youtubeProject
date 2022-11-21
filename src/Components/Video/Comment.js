
import "./Comment.css"

export default function Comment({comment, setComment, colors}){ 



    const remove = (commentData) => {
        const filter = comment.filter((c) => c !== commentData);
        setComment(filter)
    }

    const handleColors = () => {
        if(colors === "black"){
            return (
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
                        <li style={{color: "white"}}>
                            <span style={{fontWeight: "bold"}}>{e.name}</span>: {e.comm}  <button className="remove" onClick={() => remove(e)}>Remove</button>
                            
                          
                        
                            </li>
                        )
                    }
                })}
                </ul>
            </section>
            )
        }
        else{
            return (
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
                        <li style={{color: "black"}}>
                            <span style={{fontWeight: "bold"}}>{e.name}</span>: {e.comm}  <button className="remove" onClick={() => remove(e)}>Remove</button>

                            </li>
                        )
                    }
                })}
                </ul>
            </section>
            )
        }
    }
console.log(colors)

    return(
        <section>
            {handleColors()}
        </section>
    )
}
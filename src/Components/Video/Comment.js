
import { useState , useEffect} from "react";
import "./Comment.css"

export default function Comment({comment, setComment, colors}){ 

    const [storage , setStorage] = useState([])


    const remove = (commentData) => {
        const filter = comment.filter((c) => c !== commentData);
        setComment(filter)
    }

  
    useEffect(() => {
      localStorage.setItem("storage", JSON.stringify(comment))
    }, [comment])

 useEffect(() => {
const data = JSON.parse(localStorage.getItem("storage"))
if(storage){
  setStorage(data)
}
    }, [comment])

console.log(storage)



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


    return(
        <section>
            {handleColors()}
        </section>
    )
}
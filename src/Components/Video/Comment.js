
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import "./Comment.css"

export default function Comment({comment, setComment, colors}){ 

    const {id} = useParams()
    const [storage , setStorage] = useState([])

    const remove = (commentData) => {
        const filter = storage.filter((c) => c !== commentData);
        setComment(filter)
    }

  
    useEffect(() => {
      localStorage.setItem(id, JSON.stringify(comment))
    }, [comment])

  useEffect(() => {
 const data = JSON.parse(localStorage.getItem(id))
 if(storage){
   setStorage(data)
 }
     }, [comment])


    const handleColors = () => {
        if(colors === "black"){
            return (
                <section>
                <ul>
                {storage.map((e) => {
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
                {storage.map((e) => {
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
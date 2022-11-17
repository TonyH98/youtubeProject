import {useState, useEffect} from 'react'



export default function Form({handleComment}) {

    const [comments, setComment] = useState({
      name : "",
      comm: ""
    });
  
    function addComment(){
      const createComment = {
      name: comments.name,
      comm: comments.comm
      }
      handleComment(createComment)
    }
  
    
    function handleTextChange(event) {
      setComment({
        ...comments, [event.target.id]: event.target.value
      })
    }

    function reset(){
      setComment({
      name : "",
      comm: ""
      })
    }

    function handleSubmit(event) {
      event.preventDefault();
      addComment()
      reset()
      
    }

    useEffect(() => {
      const enterKey = (event) => {
        
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit(event);
        }
      };
  
      document.addEventListener('keydown', enterKey);
  
      return () => {
        document.removeEventListener('keydown', enterKey);
      };
    }, []);
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"><span style={{fontWeight: "bold"}}>Name:</span></label>
        <input
        placeholder='Name'
          type="text"
          id="name"
          value={comments.name}
          onChange={handleTextChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="comment"><span style={{fontWeight: "bold"}}>Comment:</span></label>
        <input
        placeholder='Comment'
          type="text"
          id="comm"
          value={comments.comm}
          onChange={handleTextChange}
        />
       <br></br>
       <button type="submit">Submit</button>
      </form>
    );
  }
  
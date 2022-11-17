import {useState} from 'react'



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
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
        placeholder='Name'
          type="text"
          id="name"
          value={comments.name}
          onChange={handleTextChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="comment">Comment:</label>
        <input
        placeholder='Comment'
          type="text"
          id="comm"
          value={comments.comm}
          onChange={handleTextChange}
        />
       <br></br>
        <input type="submit" /> 
      </form>
    );
  }
  
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
          type="text"
          id="name"
          value={comments.name}
          onChange={handleTextChange}
        />
  
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comm"
          value={comments.comm}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" /> 
      </form>
    );
  }
  
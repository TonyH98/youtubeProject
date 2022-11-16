import {useState} from 'react'





export default function Form() {
    const [comments, setComment] = useState({
      name : "",
      comm: ""
    });
  
  
    function handleSubmit(event) {
      event.preventDefault();
      
      .then((response) => {
      
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    function handleTextChange(event) {
      setComment({
        ...comment,
        [event.target.id]: event.target.value,
      });
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
          id="comment"
          value={comments.comm}
          onChange={handleTextChange}
        />
  
        <br />
  
        <input type="submit" />
      </form>
    );
  }
  
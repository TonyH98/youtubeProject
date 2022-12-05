import { Link } from "react-router-dom"
import { useState } from "react"
import Login from "./login"
import  "./navigate.css"

export default function Navigate ({number , setNumber , order , setOrder}) {
  const [show , setShow] = useState(false)


    return(
        <header>
      <nav>
          <aside className="logo"><Link to="/">Youtube</Link></aside>
        
        <section className="nav-links">

            <aside>
            <Link to="/">Home</Link>
            </aside>
      
          <aside>
            <Link to="/about">About</Link>
          </aside>
        </section>
        <section className="changes">

        <div className="number-input">
            <input
            type="number"
            min="5"
            max="50"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="select-bar">
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value=""></option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="relevance">Relevance</option>
              <option value="title">Title</option>
              <option value="viewCount">View Count</option>
            </select>
          </div>
        </section>
        <div className="login">
        <button className="share-button" onClick={() => setShow(true)}>Login</button>
        <Login onClose={() => setShow(false)} show={show}/>
        </div>
      </nav>
    </header>
    )
}
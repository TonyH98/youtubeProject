import { Link } from "react-router-dom"

import  "./navigate.css"

export default function Navigate ({number , setNumber}) {



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
        <div className="number-input">
            <input
            type="number"
            min="5"
            max="50"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
          </div>
      
      </nav>
    </header>
    )
}
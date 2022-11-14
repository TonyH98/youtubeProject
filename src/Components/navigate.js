import { Link } from "react-router-dom"
import  "./navigate.css"

export default function Navigate () {
    return(
        <header>
          <aside>Youtube</aside>
      <nav>
        
        <section className="nav-links">

            <aside>
            <Link to="/">Home</Link>
            </aside>
      
          <aside>
            <Link to="/about">About</Link>
          </aside>
        </section>

      </nav>
    </header>
    )
}
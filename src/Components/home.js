
import "./home.css"

export default function Home () {
    return (
        <div className="search-feature">
            <label htmlFor="search">
            Search:
            </label>
            <input
            type="text"
            placeholder="Search">
            </input>
            <button>Submit</button>
        </div>
    )
}
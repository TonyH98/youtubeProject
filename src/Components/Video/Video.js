
import { Link } from "react-router-dom"
export default function Video({yt}){
    return(
        <section>
            <div className="title">
            <Link to={`/videos/${yt.id.videoId}`}>
            <img className="thumbnails" src={yt.snippet.thumbnails.medium.url} alt="thumbnail"/>
             <aside>{yt.snippet.title}</aside> 
            </Link>
            </div>
        </section>
    )
}

import { Link } from "react-router-dom"
import "./Video.css"

export default function Video({yt}){
    return(
        <section>
            <div className="title">
            <Link to={{
                pathname: `/videos/${yt.id.videoId}`,
                
            }}>
            
            <img className="images" src={yt.snippet.thumbnails.medium.url} alt="thumbnail"/>
            </Link>
            <Link to={`/videos/${yt.id.videoId}`}>
                
             <aside style={{textDecorationStyle: "transparent"}}className="youtube-title" >{yt.snippet.title}</aside> 
            </Link>
            </div>
            
        </section>
    )
}
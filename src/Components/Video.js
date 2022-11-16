import "./Video.css"

export default function Video({yt}){
    return(
        <section>
            <div className="title">
            <img className="thumbnails" src={yt.snippet.thumbnails.medium.url} alt="thumbnail"/>
            </div>
             <aside>{yt.snippet.title}</aside> 
        </section>
    )
}
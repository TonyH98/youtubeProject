import "./about.css"



export default function About (){
    return(
        <div>
            <section className="user-story">
            As the user I can navigate between the home and the about on the nav bar. 
            On the home page there should be search bar that allows me to get a list of videos base of my search criteria.
            I can click on a video's thumb in order to get the video's web page that will allow me to play the video.
            The user should be able to comment on the video.
            I can share the link to the individual video to other users and they will be able to see the same video. 
            </section>
            <br></br>

            <section className="bio-chris">
               Chris was born and raise in Brooklyn, NYC. Chris is pursuing a career in software development along with this career he also DJs. 
                He loves spending time with his family and friends and volunteer when ever he can.  <a href="https://github.com/chrisking718/">Chris's Github</a>
            </section>
            <br></br>
            <section className="bio-tony">
                Software Engineer 
                <a href="https://github.com/TonyH98/">Tony's Github</a>
            </section>
        </div>
        
    )
}
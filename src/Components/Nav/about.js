import "./about.css"



export default function About (){
    return(
        <div>
            <section className="user-story">
                <aside className="top-portion">About the App:</aside>
                <br></br>
            As the user I can navigate between the home and the about on the nav bar. 
            On the home page there should be search bar that allows me to get a list of videos base of my search criteria.
            I can click on a video's thumb in order to get the video's web page that will allow me to play the video.
            The user should be able to comment on the video.
            I can share the link to the individual video to other users and they will be able to see the same video. 
            </section>
            <br></br>
            <p className="team">Project Team:</p>
            <br></br>
            <section className="bio-chris">
               Chris was born and raise in Brooklyn, NYC. Chris is pursuing a career in software development along with this career he also DJs. 
                He loves spending time with his family and friends and volunteer when ever he can.  
                <br></br>
                <a href="https://github.com/chrisking718/">Chris's Github</a>
            </section>
            <br></br>
            <section className="bio-tony">
                Tony was born and raised in Connecticut. Tony attending the Pursuit Fellowship to learn how to code in the hopes of becoming a software engineer.
                Outside of Pursuit, he enjoys reading various graphic novels from stuff from Image Comics, Shonen Jump, and DC comics. 
                <br></br>
                <a href="https://github.com/TonyH98/">Tony's Github</a>
            </section>
        </div>
        
    )
}
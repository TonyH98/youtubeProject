
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import './App.css';
import Home from "./Components/Nav/home"
import About from './Components/Nav/about'
import Navigate from "./Components/Nav/navigate"
import VideoID from './Components/Video/VideoID'




function App() {
const [colors, setColors] = useState("white")

const backGroundColor = () => {
  if(colors === "white"){
    setColors("black")
  }
  else{
    setColors("white")
  }
}



  return(
    <div style={{height: "100vh", backgroundColor: colors}}className='wrapper'>
      <Router> 
        <Navigate/>
        <button onClick={backGroundColor}>{colors === "white" ? "Dark Mode" : "Light Mode"}</button>
        <div>
          <br></br>
          <br></br>
        <Routes>
        <Route path ="/videos/:id" element ={<VideoID  colors={colors}/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About colors={colors}/>} />
        {/* <Route path="/vidoes/:*" element={<ErrorMessage/>}></Route> */}
        </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App;

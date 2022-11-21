
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Components/Nav/home"
import About from './Components/Nav/about'
import Navigate from "./Components/Nav/navigate"
import VideoID from './Components/Video/VideoID'
import ErrorMessage from "./Components/errors/ErrorMessage"

import './App.css';




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
        <input className="toggle"type="checkbox" onChange={backGroundColor}/>
        <div>
          <br></br>
          <br></br>
        <Routes>
        <Route path="/videos/:id" element ={<VideoID  colors={colors}/>}/>
        
        <Route path="/" element={<Home colors={colors}/>} />
        <Route path="/about" element={<About colors={colors}/>} />
        <Route path="*" element={<ErrorMessage/>} />
        </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App;

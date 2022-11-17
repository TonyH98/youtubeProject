
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';
import Home from "./Components/Nav/home"
import About from './Components/Nav/about'
import Navigate from "./Components/Nav/navigate"
import VideoID from './Components/Video/VideoID'




function App() {


  return(
    <div className='wrapper'>
      <Router> 
        <Navigate/>
        <div>
          <br></br>
          <br></br>
        <Routes>
        <Route path ="/videos/:id" element ={<VideoID/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/vidoes/:*" element={<ErrorMessage/>}></Route> */}
        </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Components/home';
import Navigate from './Components/navigate'
import About from './Components/about'

import ErrorMessage from "../src/Components/errors/ErrorMessage"


function App() {


  return(
    <div className='wrapper'>
      <Router> 
        <Navigate/>
        <div>
          <br></br>
          <br></br>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorMessage/>}></Route>
        </Routes>
        </div>
      </Router>
    
    </div>
  )
}

export default App;

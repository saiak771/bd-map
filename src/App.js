import React from 'react'
import './App.css'
//import BdMap from './bd.svg'
import {ReactComponent as ReactLogo} from './bd.svg'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import About from './components/About'


const App = () => {
  
  return (
      <div className='App'>
        <BrowserRouter>
        <nav>
          <div className="nav-bar">
            <h3>Bangladesh</h3>
            <img src="https://www.nationsonline.org/gallery/Bangladesh/Bangladesh-Flag.jpg" alt="Bangladesh Flag" width="50" title="Flag of Bangladesh"></img>
        
          
            <Link to="/about">About</Link>
        
          
          </div>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
        <div className="mapdiv">
          <ReactLogo />
        </div>
    
      </div>

      
      

  );

}

export default App;

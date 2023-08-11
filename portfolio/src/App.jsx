import { useState } from 'react';
import './App.css'
import video from './assets/introvideo.mp4'
import logo from './assets/logo.png';
import Skills from './Skills';
import ContactPage from './ContactPage';
import Project from './Project';
import About from './About';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
function App() {
  // const [page,Setpage] = useState('');
  return (
    <BrowserRouter>
      <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
        <div className="content">
          
          <nav className="navbar">
          <div className='logo'><img src={logo} alt="logo" width='25px' hight='25px'/></div>
            <ul>
              <li><Link to='#home' smooth>Home</Link></li>
              <li><Link to='#about' smooth>About</Link></li>
              <li><Link to='#skills' smooth>Skills</Link></li>
              <li><Link to='#project' smooth>Projects</Link></li>
              <li><Link to='#contact' smooth>Contact</Link></li>
            </ul>
          </nav>
          <div className="text-container">
            <p>Hi my name is</p>
            <h1>Santhosh Kumar s</h1>
            <p id='role'>Web Developer</p>
          </div>
        </div>
          <Skills />
          <Project />
          <ContactPage />
          <About />
      </div>
      </BrowserRouter>
  );
}

export default App

import './App.css'
import video from './assets/introvideo.mp4'
import logo from './assets/logo.png';
function App() {

  return (
      <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
        <div className="content">
          
          <nav class="navbar">
          <div className='logo'><img src={logo} alt="logo" width='25px' hight='25px'/></div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="text-container">
            <p>Hi my name is</p>
            <h1>Santhosh Kumar s</h1>
            <p id='role'>Web Developer</p>
          </div>
        </div>
      </div>
  )
}

export default App

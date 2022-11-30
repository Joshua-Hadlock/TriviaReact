import './css/App.css';

import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { useState, useRef } from 'react';
import music from './sounds/weeknds.mp3'

import HomePage from './pages/Home';
// import NavBar from './pages/NavBar';
import AboutPage from './pages/About';
import HelpPage from './pages/Help';
import TriviaPage from './pages/Trivia';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/Help" element={<HelpPage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Trivia" element={<TriviaPage />}></Route>
      </Routes>
    </Router>
  );
}


function NavBar() {
  const [Playing, setPlaying] = useState(false);
  const audio = new Audio(music);
  const myRef = useRef();
  function playPause() {
    if (Playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(true)
  }
  return (
    <nav className='navBar'>
      <Link to="/" >Home</Link>
      <Link to="/Help" >Help</Link>
      <Link to="/About" >About</Link>
      <Link to="/Trivia" >Trivia!</Link>
      <button onClick={playPause} className={'music'}><i class="fa-solid fa-music"></i></button>
    </nav>
    )
}
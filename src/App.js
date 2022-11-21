import './css/App.css';

import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";

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
  return (
    <nav className='navBar'>
      <Link to="/" >Home</Link>
      <Link to="/Help" >Help</Link>
      <Link to="/About" >About</Link>
      <Link to="/Trivia" >Trivia!</Link>
    </nav>
    )
}
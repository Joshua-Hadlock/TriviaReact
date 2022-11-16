import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";

export default function navBar() {
    console.log('I am working')
return (
<div className="navBar">
        <div className="navContent">
          <ul>
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/about">About</Link>
          <Link to="/trivia">Trivia!</Link>
          </ul>
        </div>
        
      </div>
)
} 



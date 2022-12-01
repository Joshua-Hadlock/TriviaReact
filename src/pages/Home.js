// ----------------------------------------------------Home page

import { Link } from "react-router-dom"
export default function HomePage() {
    return (
    <div>
        <div id="main">
          <div className="logo"></div>
          <div className="mainText">
            <h1>Test your knowledge with 
              McQuackers
            </h1>
            <div className="button"><Link to="/Trivia">Click here to get started</Link></div>
          </div>
          <div className="triviaIcons"></div>
        </div>
      </div>
    )
  }
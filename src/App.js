import './css/App.css';

function App() {
  return (
    <div>
      <div className="main">
        <div className="logo"></div>
        <div className="mainText">
          <h1>Test your knowledge with 
            McQuackers
          </h1>
          <button>Click here to get started</button>
        </div>
        <div className="triviaIcons"></div>
      </div>
      <div className="navBar">
        <div className="navContent">
          <ul>
          <li>Home</li>
          <li>Help</li>
          <li>About</li>
          <li>Trivia!</li>
        </ul>
        </div>
        
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;

import './css/App.css';




function bottomNavBar() {
  return (
    <div className='bottomNav'>
      <button>Home</button>
      <button>About</button>
      <button>Lyrics</button>
      <button>Game</button>
    </div>
  )
}
function App() {
  return (
    <>
    <div className='body'>
      <h1 className='title'>MCQUACKERS LYRIC FINDER</h1>
    </div>
      <div>hello there</div>
      {bottomNavBar()}
    </>
  );
}

export default App;

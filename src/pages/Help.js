
export default function HelpPage() {
  function parallaxEffect() {
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");
    let help = document.getElementById("helpText");

    window.addEventListener('scroll', function() {
      var value = window.scrollY;

      bg.style.top = value + 'px';
      moon.style.left = -value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      text.style.top = value * 1 + 'px';
      help.style.top = value + 'px'
    })
  }
  parallaxEffect();
    return (
      <div>
        {/* <div className="helpBody">

        <div class="logo"></div>
        <h1>Help</h1>
        <div class="arrow"></div>

        </div>
        <div className="faq">
          <div class="faqText">
            <h1>Frequently Asked Questions</h1>
            <h3 style={{marginTop:'20px'}}>Q. What kind of Trivia Questions do you guys have ?</h3>
            <h3>A. We have all kinds of Trivia Questions</h3>
            <h3 style={{marginTop:'10px'}}>Q. Do you guys have sport Trivia ?</h3>
            <h3>A. Yes we do </h3>
            <h3 style={{marginTop:'10px'}}>Q. Where are you guys located?</h3>
            <h3>A. We are an online company only but our corporate building is located in Las Vegas NV </h3>
            </div>
          </div>
          <div class="scrollContent">

          </div> */}
          <div className="parBody">
          
          <img src="images/bg.jpg" id="bg"></img>
          <img src="images/moon.png" id="moon"></img>
          <img src="images/mountain.png" id="mountain"></img>
          <img src="images/road.png" id="road"></img>
          <img src="images/logo2.png" id="text"></img>
          <h1 id="helpText">Help</h1>

          </div>
          <div style={{height:'500px', width:'100%'}}></div>
          
      </div>

    )
  
  }
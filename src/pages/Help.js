import { useEffect, useRef } from 'react';


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

      bg.style.top = value * 0.5 + 'px';
      moon.style.left = -value * 0.5  + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      text.style.top = value * 1 + 'px';
      help.style.top = value + 'px'
    })
  }

  const bgRef = useRef(null);

  useEffect(() => {
    const isReady = bgRef.current;

    if(isReady) {
      parallaxEffect();
    }

  }, [bgRef.current])


    return (
      <div>
        {/* <div className="helpBody">

        <div class="logo"></div>
        <h1>Help</h1>
        <div class="arrow"></div>

        </div>
        
          <div class="scrollContent">

          </div> */}
          <div className="parBody">
          
          <img src="images/bg.jpg" id="bg" ref={bgRef}></img>
          <img src="images/moon.png" id="moon"></img>
          <img src="images/mountain.png" id="mountain"></img>
          <img src="images/road.png" id="road"></img>
          <img src="images/logo2.png" id="text"></img>
          <h1 id="helpText">Help</h1>
  
          </div>
          <div className="helpBody">
          <div className="helpScrollContent">
              <div className="helpScrollContentLeft">
                <h1>FAQ</h1>
                <div className="line"></div>
                <h3 style={{marginTop: '50px'}}>Q. Do you guys have sports Trivia ?</h3>
                <h3>A. Yes we do we have a variety of sport Trivia</h3>
                <h3 style={{marginTop: '50px'}}>Q. How long have you guys existed ?</h3>
                <h3>A. We are quite a young company, we started about a year ago</h3>
                <h3 style={{marginTop: '50px'}}>Q. Where are you guys located ?</h3>
                <h3>A. We are an online company but we have offices in Las Vegas NV</h3>
                <h3 style={{marginTop: '50px'}}>Q. How much trivia do you guys have ?</h3>
                <h3>A. We have tons of hours of trivia</h3>
                <div className="logo"></div>
              </div>
              <div className="helpScrollContentRight">
            
              </div>
          </div>
          <div class="testimonial">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div id="cI1" className="carousel-item active carouselSize">
      <div class="carousel-caption d-none d-md-block">
        <div class="stars"></div>
        <h4>Agatha Marie Laurence Kennedy the IV</h4>
        <p>I like it </p>
      </div>
    </div>
    <div id="cI2" className="carousel-item carouselSize">
      <div class="carousel-caption d-none d-md-block">
      <div class="stars"></div>
        <h4>Lulua 'ina Eleu Ailani Koa Kamea</h4>
        <p>"Grunt"</p>
      </div>
    </div>
    <div id="cI3" className="carousel-item carouselSize">
      <div class="carousel-caption d-none d-md-block">
      <div class="stars"></div>
        <h4>Jeff</h4>
        <p>Where am I ?</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

          </div>
          <div class="contactPage">
            <h1>Questions? Please call 801-485-4936</h1>
          </div>
          </div>
      </div>

    )
  
  }
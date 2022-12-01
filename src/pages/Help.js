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
                <h3>A. We are quite a young company, we started about a week ago</h3>
                <h3 style={{marginTop: '50px'}}>Q. Where are you guys located ?</h3>
                <h3>A. We are an online company but we have offices in Las Vegas NV</h3>
                <h3 style={{marginTop: '50px'}}>Q. How much trivia do you guys have ?</h3>
                <h3>A. We have tons of hours of trivia</h3>
                <div className="logo"></div>
              </div>
              <div className="helpScrollContentRight">
              <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How Do I Get Started ?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body h">Click on the Trivia page to get started select the type of trivia you would like and the ammount then click the start button and have fun !!!</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How Much Trivia Do We have ?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have aproximately a variety of 24 Trivia categories that range from Sports, Music, Vehicles, Celebrities and more !! </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        What Is The Cube At The Trivia Page For ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We felt that there were people out there who would eventually get bored of just playing trivia so we gave them a cool 3D object to play around with the purpose is to just play with it like a gimmick</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        How Can I Keep Score ?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have a score keeper that keeps score and when you click the finish button it will give you your final score </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        Where Can We Learn About McQuackers ?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We have an about page but a little bit about us is we are an independent company run by 2 students, we started about a week ago and we are still at it.</div>
    </div>
  </div>
  <div class="duckImage"></div>
</div>
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
      <div class="carousel-caption">
        <div class="stars"></div>
        <h4>Agatha Marie Laurence Kennedy the IV</h4>
        <p>I like it </p>
      </div>
    </div>
    <div id="cI2" className="carousel-item carouselSize">
      <div class="carousel-caption">
      <div class="stars"></div>
        <h4>Lulua 'ina Eleu Ailani Koa Kamea</h4>
        <p>"Grunt"</p>
      </div>
    </div>
    <div id="cI3" className="carousel-item carouselSize">
      <div class="carousel-caption">
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
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  function parallaxEffect() {
    let mountain = document.getElementById("Mountain");
    let ducks = document.getElementById("Ducks");

    window.addEventListener('scroll', function() {
      var value = window.scrollY;

      mountain.style.top = value * 0.15 + 'px';
      ducks.style.left = value * 0.15 + 'px';
    })
  }

  const nightRef = useRef(null);

  useEffect(() => {
    const isReady = nightRef.current;

    if(isReady) {
      parallaxEffect()
    }

  }, [nightRef.current])
    return (
      <div>
        <div className="aboutBody">
          <div className="aboutPage">
            <div className="mcqLogo"></div>
            <div className="aboutText">


            <h3>About Us</h3>
            <h1 className="aboutH1">McQuackers</h1>
            <p>We believe that everyone is secretly a genius and we thought that the best way to prove that is 
              to unlock hidden knowledge in their head. Originally a school project two high school students by 
              the name of Joshua Hadlock and Isaac Tellez created McQuackers. When we asked the creator of the 
              brand name why he chose McQuackers he said "Well it was just the first thing that came to mind"
            </p>
            <div className="scrollForMore"><h3>Scroll For More</h3></div>
            </div>
          </div>
          <div className="scrolledAbout">
            <div class="locationLeft">

            </div>

            <div class="locationDesc">
            <div class="scrolledAboutText">
              <h1>Where are we located ?</h1>
              <p>We are an online company but our corporate building is located in Las Vegas NV, we also have a new corporate
                location in London Uk but we are mostly based in USA. Our building is located in Paradise Las Vegas in front of
                Mandalay Bay and in that building we answer calls about our website.
              </p>
              </div>
            </div>
          </div>
          <div class="ArtWork">
            <img src="images/Mountain.png" id="Mountain" ref={nightRef}></img>
            <img src="images/DucksFlyingBackground.png" id="Ducks"></img>
            <h1>"Any bookmark worth more than a dollar is a waste of money because you could just use the dollar" <span>- Random Person</span></h1>
          </div>
          <div class="us1">
            <div class="us1Left">
            <div class="us1LeftText">
            <h1>Isaac Tellez</h1>
            <p>Isaac Tellez is our top designer. Isaac is responsible for all of the design in this website including this very page.
              Isaac has over a year expirience as a web developer he first started in high school and is now studying at Mountainland
              Technical College. Isaac currently lives in Utah and attends Westlake High School. Isaac has lots of knowledge with CSS,
              HTML, Bootstrap, Bits of Javascript and SCSS. Isaac is from California but was raised and live most of his life in Utah
            </p>
            </div>
            </div>
            <div class="us1Right">
              <div class="Isaac"></div>
            </div>

          </div>
          <div class="us2">
            <div class="us2Left">
            <div class="Josh"></div>
            </div>
            <div class="us2Right">
              <div class="us2RightText">
                <h1>Joshua Hadlock</h1>
            <p>Joshua Hadlock is our top developer. He is responsible for all Javascript and Api in this website and 
              can make one heck of a website. He is a web developer that is currently attending Mountainland Technical College
              in Lehi Utah. He has over a year of expirience of coding and has lots of knowledge with almost all of the coding
              languages. He is from Utah and still lives in Utah to this day he goes to Lone Peak High School.  </p>
              </div>
            
            </div>

          </div>
        </div>
      </div>
    )
  }
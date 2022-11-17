
export default function HelpPage() {
    return (
      <div>
        <div className="helpBody">
          <div className="circle"></div>
        <div className="logo"></div>
          <h1 className="contact">Have Questions? Please Contact us at 625-782-3774</h1>
          

        </div>
        <div class="scrollContent">
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <h3 style={{marginTop:'20px'}}>Q. What kind of Trivia Questions do you guys have ?</h3>
            <h3>A. We have all kinds of Trivia Questions</h3>
            <h3 style={{marginTop:'10px'}}>Q. Do you guys have sport Trivia ?</h3>
            <h3>A. Yes we do </h3>
            <h3 style={{marginTop:'10px'}}>Q. Where are you guys located?</h3>
            <h3>A. We are an online company only but our corporate building is located in Las Vegas NV </h3>
          </div>
          <h4>Our Corporate location</h4>
          <div class="iframeContainer">
            <iframe class="map"
        title="Inline Frame Example"
       src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        </iframe>
          </div>
          
        </div>
      </div>

    )
  }
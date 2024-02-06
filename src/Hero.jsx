import React, { useState } from 'react';
import downarrow from './assets/images/downarrow.svg';

function Hero() {

    const [showContinue, setShowContinue] = useState(true);

    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      console.log(scroll);
      if (scroll > 400) {
        setShowContinue(false);
      }
    });

    

    


  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-bg"></div>
        <div className="hero-text">
          Designing and building <span className="interfaces">interfaces</span>
          <div className="features">
            <span className="feature">Seamless</span>
            <span className="feature">Intuitive</span>
            <span className="feature">Fully responsive</span>
          </div>
        </div>
      </div>
      
        <div className={showContinue ? "scrollsign" : "scrollsign faded"}>
          Continue
          <div className="downarrow">
            <img src={downarrow} alt="arrow-down"></img>
          </div>
        </div>
      
    </div>
  );
}

export default Hero
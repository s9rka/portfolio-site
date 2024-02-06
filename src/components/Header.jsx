import React from "react";

function Heading() {
  return (
    <div className="header">
      <div className="header-title">
        <div className="profile-pic">
          <img
            className="profile-pic"
            src="./assets/profile-pic.webp"
            alt="profile-pic"
          ></img>
        </div>
        <div className="name">Sören Pruul</div>
      </div>

      
        <a
          href="https://www.linkedin.com/in/s%C3%B6ren-pruul-629672204/"
          className="message-me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's work together!
        </a>

    </div>
  );
}

export default Heading;

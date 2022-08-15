import './css/Heading.scss'
import React from 'react'

function Heading() {

  return (
    <div className='heading'>
        
        <div className="profile-pic"><img className="profile-pic" src="./assets/profile-pic.png"></img></div>
        <div className="heading-title">
            <div className='name'>Sören Pruul</div>
            <div className="message-me">
                <a href="https://www.linkedin.com/in/s%C3%B6ren-pruul-629672204/" target="_blank">Let's build together!</a>
            <img src='./assets/message-me.svg'></img>
        </div>
            
        </div>
        
    </div>
  )
}

export default Heading
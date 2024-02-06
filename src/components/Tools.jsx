import React, { useEffect } from 'react'
import { useState } from 'react';

function Tools() {

    const [tools, setTools] = useState([
        {name: "notion", active: true},
        {name: "figma", active: false},
        {name: "react", active: false},
        {name: "webflow", active: false}
    ])

    useEffect(() => {
      setTools('notion');
    }, []);
    

    function changeToNotion() {
        setTools("notion");
    }

    function changeToFigma() {
        setTools("figma");
    }

    function changeToReact() {
        setTools("react")
    }

    function changeToWebflow() {
        setTools("webflow")
    }

  return (
    <div className='tools'>
        <div className="tools-container">
            <div className="tools-tags">
                <div className="icons">
                    <div onClick={changeToNotion} className={tools === "notion" ? 'icon-active' : "icon"}>
                        <img className="logo-img" src="./assets/notion.svg" alt ="notion-logo"></img>
                        <span>Notion</span>
                    </div>

                    <div onClick={changeToFigma} className={tools === "figma" ? 'icon-active' : "icon"}>
                        <img className="logo-img" src="./assets/figma.svg" alt ="figma-logo"></img>
                        <span>Figma</span>
                    </div>

                    <div onClick={changeToReact} className={tools === "react" ? 'icon-active' : "icon"}>
                        <img className="logo-img" src="./assets/react.svg" alt ="react-logo"></img>
                        <span>React</span>
                    </div>

                    {/*<div onClick={changeToWebflow} className={tools === "webflow" ? 'icon-active' : "icon"}>
                        <img className="logo-img"  src="./assets/webflow.svg" alt ="webflow-logo"></img>
                        <span>Webflow</span>
  </div>*/}
                    
                </div>
            </div>
            <div className="tools-description">

                { tools==="notion" && 
                <div className='tools-description-content'>
                    <img src="./assets/notion.svg" alt='notion-logo'></img> For the documentation - all the links and concepts of a project can be found here. 
                </div>}

                { tools==="figma" && <div className='tools-description-content'><img src="./assets/figma.svg" alt='figma-logo'></img> For experimenting with different visual styles and ideas.</div>}
                { tools==="react" && <div className='tools-description-content'><img src="./assets/react.svg" alt='react-logo'></img> For building custom websites and apps. <br/></div>}
               {/* { tools==="webflow" && <div className='tools-description-content'><img src="./assets/webflow.svg" alt='webflow-logo'></img> For building websites fast</div>} */ }
            </div>
        </div>
        
    </div>
  )
}

export default Tools
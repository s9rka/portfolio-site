import React from 'react'
import { useState } from 'react';
import './css/Tools.scss'

function Tools() {

    const [tools, setTools] = useState([
        {name: "notion", active: true},
        {name: "figma", active: false},
        {name: "react", active: false},
        {name: "webflow", active: false}

    ])

    function changeToNotion() {
        setTools("notion");
        console.log(tools);
    }

    function changeToFigma() {
        setTools("figma");
        console.log(tools);
    }

    function changeToReact() {
        setTools("react")
        console.log(tools);
    }

    function changeToWebflow() {
        setTools("webflow")
        console.log(tools);
    }

    
  return (
    <div className='tools'>
        <div className="tools-container">
            <div className="tools-tags">
                <div className="icons">
                    <a onClick={changeToNotion} className='icon' href='#notion' id="notion">
                        <img className="logo-img" src="./assets/notion.svg"></img>
                        <span>Notion</span>
                    </a>

                    <a onClick={changeToFigma} className='icon' href='#figma' id="figma">
                        <img className="logo-img" src="./assets/figma.svg"></img>
                        <span>Figma</span>
                    </a>

                    <a onClick={changeToReact} className='icon' href='#react' id="react">
                        <img className="logo-img" src="./assets/react.svg"></img>
                        <span>React</span>
                    </a>

                    <a onClick={changeToWebflow} className='icon' href='#webflow' id="webflow">
                        <img className="logo-img"  src="./assets/webflow.svg"></img>
                        <span>Webflow</span>
                    </a>
                    
                </div>
            </div>
            <div className="tools-description">
            { tools==="notion" && <div className='tools-description-content'><img src="./assets/notion.svg"></img> For the documentation - all the links and concepts of a project can be found here</div>}
            { tools==="figma" && <div className='tools-description-content'><img src="./assets/figma.svg"></img> For experimenting with different visual styles and ideas</div>}
            { tools==="react" && <div className='tools-description-content'><img src="./assets/react.svg"></img> For building custom websites and apps</div>}
            { tools==="webflow" && <div className='tools-description-content'><img src="./assets/webflow.svg"></img> For building websites fast</div>}

                
            </div>
        </div>
        
    </div>
  )
}

export default Tools
import React from "react";
import { useState } from "react";
import Works from "./components/Works";
import Abilities from "./components/Abilities";
import Tools from "./components/Tools";

function Tabs() {
  const [showProjects, setShowProjects] = useState(true);
  const [showAbilities, setShowAbilities] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const screenHeight = Number(window.screen.availHeight -300);

  
  

  const toggleProjects = () => {
    setShowProjects((current) => !current);
    setShowAbilities(false);
    setShowTools(false);
    window.scrollTo(0, screenHeight)
  };
  const toggleAbilities = () => {
    setShowAbilities((current) => !current);
    setShowProjects(false);
    setShowTools(false);
    window.scrollTo(0, screenHeight);
  };
  const toggleTools = () => {
    setShowTools((current) => !current);
    setShowAbilities(false);
    setShowProjects(false);
    window.scrollTo(0, screenHeight);
  };

  return (
    <div className="buttons-container">
      <div className="tabs-bg"></div>
      <div className="buttons">
        <div
          onClick={toggleProjects}
          className={showProjects ? "button button-active" : "button"}
        >
          <div>Projects</div>
        </div>

        <div
          onClick={toggleAbilities}
          className={showAbilities ? "button button-active" : "button"}
        >
          <div>Abilities</div>
        </div>

        <div
          onClick={toggleTools}
          className={showTools ? "button button-active" : "button"}
        >
          <div>Tools</div>
        </div>
      </div>

      <div className="tabs">
        {showProjects && <Works />}

        {showAbilities && <Abilities />}

        {showTools && <Tools />}
      </div>
    </div>
  );
}

export default Tabs;

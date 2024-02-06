import React from 'react'

function Studies() {
  return (
    <div className='studies'>
        
        <div className="study"> 
            <label>
                <input type="checkbox" />
                <div class="card">
                <div class="front">
                    <img className='pillar' src='./assets/dorian.svg' alt="dorian-pillar"></img>
                    Psychology
                    <img src='./assets/flip.svg' alt="enter"></img>

                </div>
                <div class="back"><img className='pillar' src='./assets/dorian.svg' alt="dorian-pillar"></img>
                    My main reason for studying psychology is to better understand how we make decisions:
                    <ul>
                        <li>Bachelors of Psychology in Tartu University (2017-2020)</li>
                        <li>For my <a href='https://www.academia.edu/81826045/The_effect_of_attentional_scope_on_the_decision_making_process'>final thesis</a> we put together an experiment to monitor eye movements during decision making in a virtual snack store</li>
                        <li>Wrote an <a className='study-link' href="https://www.err.ee/1063444/soren-pruul-tolgendusi-mudides-muutusteni" target="_blank" rel="noopener noreferrer">article</a> (in Estonian) on a wave of research named Wise Interventions</li>
                    </ul> 
                </div>
                </div>
            </label> 
        </div>

        <div className="study">
            <label>
                <input type="checkbox" />
                <div class="card">
                <div class="front">
                    <img className='pillar' src='./assets/ionian.svg' alt="ionian-pillar"></img><div />
                    Design
                    <img className='flip-icon' src='./assets/flip.svg' alt="enter"></img>
                </div>
                <div class="back"><img src='./assets/ionian.svg' alt="ionian-pillar"></img>
                    Through design I turn information into digestible forms - content. <br /> Great design is not only pleasing to the eye, but also requires minimal cognitive load to navigate.
                </div>
                </div>
            </label>
        </div>

        <div className="study">
            <label>
                <input type="checkbox" />
                <div class="card">
                <div class="front">
                    <img className='pillar' src='./assets/corinthian.svg' alt="corinthian-pillar"></img>
                    Code
                    <img src='./assets/flip.svg' alt="enter"></img>
                </div>
                <div class="back"><img className='pillar' src='./assets/corinthian.svg' alt="corinthian-pillar"></img>
                    To realize my ideas I turn code into fully responsive and seamless interfaces</div>
                </div>
            </label>
        </div>
    </div>

  )
}

export default Studies
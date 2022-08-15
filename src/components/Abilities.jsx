import React from 'react'
import './css/Abilities.scss'

function Studies() {
  return (
    <div className='studies'>
        
        <div className="study"> 
            <label>
                <input type="checkbox" />
                <div class="card">
                <div class="front">
                    <img className='pillar' src='./assets/dorian.svg'></img>
                    Psychology
                </div>
                <div class="back"><img className='pillar' src='./assets/dorian.svg'></img>
                    My main reason for studying psychology is to make better decisions
                    <ul>
                        <li>Bachelors of Psychology in Tartu University (2017-2020)</li>
                        <li>Wrote an <a className='study-link' href="https://www.err.ee/1063444/soren-pruul-tolgendusi-mudides-muutusteni" target="_blank">article</a> (in Estonian) on a wave of research named Wise Interventions</li>
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
                    <img className='pillar' src='./assets/ionian.svg'></img>
                    UX Design
                </div>
                <div class="back"><img src='./assets/ionian.svg'></img>
                    First time I saw the word UX was when I read a book called <a href="https://www.goodreads.com/book/show/17272574-mobile-persuasion-design"className='study-link' target="_blank">
                     Mobile Persuasion Design: Changing Behaviour by Combining Persuasion Design With Information Design</a>
                      <br/> <span>All the words of the title spoke to me but it was 2 years later when I got into it.</span> </div>
                </div>
            </label>
        </div>

        <div className="study">
            <label>
                <input type="checkbox" />
                <div class="card">
                <div class="front">
                    <img className='pillar' src='./assets/corinthian.svg'></img>
                    Code
                </div>
                <div class="back"><img className='pillar' src='./assets/corinthian.svg'></img>
                    To realize my ideas I turn design into code</div>
                </div>
            </label>
        </div>
    </div>

  )
}

export default Studies
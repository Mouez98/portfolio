import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters/index'
import './index.scss'

const About = () => {
     const [letterClass, setLetterClass] = useState('animated-letter')

     useEffect(() => {
          setTimeout(() => {
           setLetterClass('animated-letter-hover')
         }, 3000)
       }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
             letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className='stage-cube-cont'>
        <div className="cubespinner">
           <div className="front">
                <FontAwesomeIcon icon={faAngular} />
           </div>
           <div className="right">
                <FontAwesomeIcon icon={faHtml5} />
           </div>
           <div className="top">
                <FontAwesomeIcon icon={faCss3} />
           </div>
           <div className="back">
                <FontAwesomeIcon icon={faReact} />
           </div>
           <div className="left">
                <FontAwesomeIcon icon={faJsSquare} />
           </div>
           <div className="bottom">
                <FontAwesomeIcon icon={faGitAlt} />
           </div>
      </div>
      </div>
      
    </div>
  )
}

export default About

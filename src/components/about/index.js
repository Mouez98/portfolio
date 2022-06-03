import {faAngular,faCss3,faGitAlt,faHtml5,faJsSquare,faReact, faSass} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'
import useLetteranimation from '../../hooks/use-letterAnimation'
import Header from '../Ui/Header'
// import { useLocation } from 'react-router-dom'
import useSectionClass from '../../hooks/use-sectionClass'

const About = () => {
  const letterClass = useLetteranimation(3000)
  const sectionClass = useSectionClass()


  return (
    <>
      <div className={`container about-page ${sectionClass}`}>
        <div className="text-zone">
          <Header
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
          <div className="paraContainer">
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p>
              I'm quietly confident, naturally curious, and perpetually working
              on improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic,
              photography enthusiast, and tech-obsessed!!!
            </p>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="front">
              <FontAwesomeIcon icon={faSass} />
            </div>
            <div className="right">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="back">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="left">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="top">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="bottom">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

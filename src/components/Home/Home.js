import './Home.scss'
import useLetteranimation from '../../hooks/use-letterAnimation.js'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters'
import Loader from 'react-loaders'
import styled from 'styled-components'

import Contact from '../contact/index'
import About from '../about/index'
import MyWork from '../myWork/index'
import Button from '../Ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const letterClass = useLetteranimation()
  const strArray = ['o', 'u', 'e', 'z']
  const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  const Alpha = styled.div`
    font-size: inherit;
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    font-weight: bolder;
    font-stretch: ultra-expanded;
    left: 50%;
    top: 50%;
    color: #45a29e;
    transform: translate(-50%, -50%) rotate(345deg);
  `

  const AlphaOne = styled(Alpha)`
    color: #dc3545;
    left: 53%;
  `

  return (
    <>
      <div className="container home-page">
        <div className="scroll-down left">
          <span>
            <FontAwesomeIcon icon={faArrowDown} color="#c5c6c7" />
          </span>
          <span className="scroll-text">scroll down</span>
        </div>
        <div className="scroll-down right">
          <span>
            <FontAwesomeIcon icon={faArrowDown} color="#c5c6c7" />
          </span>
          <span className="scroll-text">scroll down</span>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>,</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <div id="logoChar" >
              <Alpha> M </Alpha>
              <AlphaOne>M </AlphaOne>
            </div>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <div className="paraContainer">
            <p>Frontent developer / ReactJs</p>
          </div>
          <Link to="/contact" className="flat-button">
            <Button text="CONTACT ME" />
          </Link>
        </div>
        <div className="logo" id="main-logo">
          <Alpha> M </Alpha>
          <AlphaOne>M </AlphaOne>
        </div>
      </div>
      <About />
      <MyWork />
      <Contact />
      <Loader type="pacman" />
    </>
  )
}

export default Home

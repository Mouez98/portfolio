import './Home.scss'
import useLetteranimation from '../../hooks/use-letterAnimation.js'
import logoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters'
import Logo from './logo/index'
import Loader from 'react-loaders'

const Home = () => {
  const letterClass = useLetteranimation()
  const strArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
  
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _10`}>i</span>
          <span className={`${letterClass} _11`}>,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _13`}>'</span>
          <span className={`${letterClass} _14`}>m</span>
          <img src={logoS} alt="developer" />
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
        <h2>Frontent developer / ReactJs</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home

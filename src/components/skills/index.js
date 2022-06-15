import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import useLetteranimation from '../../hooks/use-letterAnimation'
import Header from '../Ui/header/Header'
import Chart from './Chart'
import './index.scss'


const Skills = () => {
  const letterClass = useLetteranimation(3000)
  const headerText = ['Skills', ' ', '&', ' ', 'Experncies']
 
  return (
      <>
    <div className="container skills-page">
      <div className="text-zone">
        <Header strArray={headerText} letterClass={letterClass} idx={15} />
        <div className='paraContainer'>
        <p>
          Front-end development including technologies like 
          <span className="tech-tag">HTML5</span>, 
          <span className="tech-tag">CSS3</span>, 
          <span className="tech-tag">JavaScript</span>, 
          <span className="tech-tag">React</span>, 
          <span className="tech-tag">TypeScript</span>, 
          <span className="tech-tag">Sass</span>, 
          <span className="tech-tag">Git</span>, 
          etc.
        </p>
        <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            Visit my
            <Link to='https://www.linkedIn.com/mouez-matoui/' className='link'>LinkedIn</Link> profile for more details.          </p>
          </div>
      </div>
      <div className='skills-details'>
     <Chart width={85} skill='react'/>
     <Chart width={90} skill='css'/>
     <Chart width={90} skill='html'/>
     <Chart width={85} skill='javaScript'/>
     <Chart width={65} skill='git'/>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Skills

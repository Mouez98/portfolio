import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import useLetteranimation from '../../hooks/use-letterAnimation'
import Header from '../Ui/Header'
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
          Expert in front-end development including technologies like 
          <span className="tech-tag">HTML5</span>, 
          <span className="tech-tag">CSS3</span>, 
          <span className="tech-tag">JavaScript</span>, 
          <span className="tech-tag">jQuery</span>, 
          <span className="tech-tag">Angular2</span>, 
          <span className="tech-tag">React</span>, 
          <span className="tech-tag">TypeScript</span>, 
          <span className="tech-tag">Jasmine</span>, 
          <span className="tech-tag">Bootstrap</span>, 
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
            <Link to='https://www.linkedIn.com/' className='link'>LinkedIn</Link> profile for more details. Also you can checkout my cv on this
            <Link to='cv' className='link'>link</Link> , or feel free to give a peek on some of my blog
            <Link to='blog' className='link'>posts</Link>.
          </p>
          </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Skills

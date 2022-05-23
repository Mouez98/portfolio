import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import './index.scss'
import { faFacebook, faGithub,  faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <img src={logoS} alt="logo" />
        <img className='sub-logo' src={logoSubtitle} alt="slobadan" />
      </Link>
      <nav>
          <NavLink to='/' exact='true' activeclassname="active">
              <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
          </NavLink>
          <NavLink to='/about' exact='true' activeclassname="active" className='about-link'>
              <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>
          <NavLink to='/contact' exact='true' activeclassname="active" className='contact-link'>
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
          <NavLink to='/skills' exact='true' activeclassname="active" className='skills-link'>
              <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
          </NavLink>

      </nav>
      <ul>
          <li>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mouez-matoui'>
                  <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
              </a>
          </li>
          <li>
              <a target='_blank' rel='noreferrer' href='https://www.github.com'>
                  <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
              </a>
          </li>
          <li>
              <a target='_blank' rel='noreferrer' href='https://www.facebook.com'>
                  <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
              </a>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar

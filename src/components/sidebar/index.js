import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faEye, faGear, faHome, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Ui/Logo'
import './index.scss'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleBtnHandler = () => setToggleBtn((prev)=> !prev);

  const toggleBtnContent = toggleBtn === false ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />

  let navBarClass = toggleBtn? "nav-bar show" : "nav-bar"

  return (
    <div className={navBarClass}>
        <div className="main-menu">
          <Link to="/" className="logo">
          <Logo />
          </Link>
          <span>Mouez</span>
        </div>
      <nav className='main-links'>
        <NavLink to="/" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          exact="true"
          activeclassname="active"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/skills"
          exact="true"
          activeclassname="active"
          className="skills-link"
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>

        <NavLink
          to="/mywork"
          exact="true"
          activeclassname="active"
          className="my-work-link"
        >
          <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/contact"
          exact="true"
          activeclassname="active"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className='social-links'>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mouez-matoui"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/mouez98">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://m.facebook.com/mouez.rm11/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <div className='toggle-btn' onClick={toggleBtnHandler}>
        {toggleBtnContent}
      </div>
          </div>
  )
}

export default Sidebar

import Loader from 'react-loaders'
import useLetteranimation from '../../hooks/use-letterAnimation'
import AnimatedLetters from '../animatedLetters'

import './index.scss'
const Contact = () => {
  const letterClass = useLetteranimation(3000)

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <ul>
              <li>
                <input
                  type="text"
                  className="half"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>
              <li>
                <input
                  type="email"
                  className="half"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea placeholder="Message" name='message' required></textarea>
              </li>
              <li>
                <input type='submit' value='send' className='flat-button' />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

import { useRef } from 'react'
import Loader from 'react-loaders'
import useLetteranimation from '../../hooks/use-letterAnimation'
import AnimatedLetters from '../animatedLetters'
import emailjs from '@emailjs/browser'
import Map from './Map'
import './index.scss'
const Contact = () => {
  const letterClass = useLetteranimation(3000)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tfu9aq8',
        'template_pjvlori',
        form.current,
        'eTLftCnpvGKamo4_G'
      )
      .then(
        (result) => {
          alert('Message sent succeful')
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          alert('Message failed, try again pls')
        }
      )
  }

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
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="form-control">
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                </div>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Map />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

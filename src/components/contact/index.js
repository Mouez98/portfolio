import { useRef } from 'react'
import Loader from 'react-loaders'
import useLetteranimation from '../../hooks/use-letterAnimation'
import emailjs from '@emailjs/browser'
import Map from './Map'
import './index.scss'
import Header from '../Ui/header/Header'
import Button from '../Ui/button/Button'

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
      <div className={`container contact-page `}>
        <div className="text-zone">
          <Header
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            letterClass={letterClass}
            idx={15}
          />
          <div className="paraContainer">
            <p>
              I am interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to contact me using below form either.
            </p>
          </div>
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
                    <label htmlFor="name" className="label-name"></label>
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="email" className="label-email"></label>
                  </li>
                </div>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subject" className="label-subject"></label>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <label htmlFor="message" className="label-textarea"></label>
                </li>
                <li>
                  <Button type={'submit'} text={'send'} />
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

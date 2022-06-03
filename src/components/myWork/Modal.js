import { useState, useEffect } from 'react'
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'
import Transition from 'react-transition-group/cjs/Transition'

const Overlay = ({ onClickHandler, project, show }) => {
  const [currImageIdx, setCurrentImgIdx] = useState(0)
  const [slideDirection, setSlideDirection] = useState('')

  const { header, subHeader, details, images, live, sourceCode } = project

  useEffect(() => {
    setTimeout(() => {
      setSlideDirection('')
    }, 1010)
  })

  //For animation direction
  const onSlideLeftHandler = () => {
    setSlideDirection('current')
  }
  const onSlideRightHandler = () => {
    setSlideDirection('left')
  }
  
  //Checking the validity of the given index
  const checkNumber = (number) => {
    if (number >= images.length) {
      return 0
    } else if (number < 0) {
      return images.length - 1
    } else {
      return number
    }
  }

  //Onclick chevronLeft
  const onClickChevronLeftHandler = () => {
    prevImageHandler()
    onSlideLeftHandler()
  }

  //Onclick chevronRight
  const onClickChevronRightHandler = () => {
    nextImageHandler()
    onSlideRightHandler()
  }

  //Grap next image
  const nextImageHandler = () => {
    setCurrentImgIdx((index) => {
      let number = index + 1
      return checkNumber(number)
    })
  }
  //Grap prev image
  const prevImageHandler = () => {
    setCurrentImgIdx((index) => {
      let number = index - 1
      return checkNumber(number)
    })
  }
  return (
    <Transition in={show} timeout={500} unmountOnExit>
      {(state) => (
        <div className={`overlay ${state}`}>
          <div className="image-container">
            <img
              src={images[currImageIdx]}
              alt="sample"
              className={slideDirection}
            />
            <i className="left" onClick={onClickChevronLeftHandler}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </i>
            <i className="right" onClick={onClickChevronRightHandler}>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </div>
          <div className="description">
            <div className="header-container">
              <h2>{header}</h2>
              <h3>{subHeader}</h3>
            </div>
            <div className="para-container">
              <p>{details}</p>
            </div>
            <div className="btn-container">
              <a target="_blank" rel="noreferrer" href={live}>
                <button>View Site</button>
              </a>
              <a target="_blank" rel="noreferrer" href={sourceCode}>
                <button>Source code</button>
              </a>
              <button onClick={onClickHandler} className='closeBtn'>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

const Modal = ({ onClickHandler, project, show }) => {
  return (
    <>
      <Transition in={show} timeout={500} unmountOnExit>
        {(state) => (
          <div className={`modal ${state}`} onClick={onClickHandler}></div>
        )}
      </Transition>
      <Overlay
        onClickHandler={onClickHandler}
        project={structuredClone(project)}
        show={show}
      />
    </>
  )
}

export default Modal

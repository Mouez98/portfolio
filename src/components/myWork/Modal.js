import { useState } from 'react'

import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'

const Overlay = ({ onClickHandler, project }) => {
  const [currImageIdx, setCurrentImgIdx] = useState(0);


  const nextImageHandler = () => {
    setCurrentImgIdx(index => index + 1)
  }
  const prevImageHandler = () => {
    setCurrentImgIdx(index => index - 1)
  }
  const { header, subHeader, details, images, live, sourceCode} = project
  return (
    <div className="overlay">
      <div className="image-container">
      <img  src={images[currImageIdx]} alt="sample" />
        <i className="left" onClick={prevImageHandler}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </i>
        <i className="right" onClick={nextImageHandler}>
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
        </div>
      </div>
    </div>
  )
}

const Modal = ({ onClickHandler, project }) => {
  return (
    <>
      <div className="modal" onClick={onClickHandler}></div>
      <Overlay
        onClickHandler={onClickHandler}
        project={structuredClone(project)}
      />
    </>
  )
}

export default Modal

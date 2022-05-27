import { useState, useEffect } from 'react'

import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'

const Overlay = ({ onClickHandler, project }) => {
  const [currImageIdx, setCurrentImgIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState('')

  const { header, subHeader, details, images, live, sourceCode} = project;

  useEffect(()=> {
     setTimeout(()=>{
       setSlideDirection('')
     },300)
  })

  //For animation direction
  const onSlideLeftHandler = () => {
    setSlideDirection('right')
  }
  const onSlideRightHandler = () => {
    setSlideDirection('left')
  }

  //Checking the validity of the given index
  const checkNumber = (number)=> {
      if(number >= images.length) {
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
    setCurrentImgIdx(index => {
      let number =  index + 1
      return checkNumber(number)
      
    })
  }
   //Grap prev image
  const prevImageHandler = () => {
    setCurrentImgIdx(index => {
      let number =  index - 1
      return checkNumber(number)
     
    })
  }
  return (
    <div className="overlay">
      <div className="image-container">
      <img  src={images[currImageIdx]} alt="sample" className={slideDirection} />
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

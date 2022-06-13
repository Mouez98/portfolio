import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'
import Transition from 'react-transition-group/cjs/Transition'
import ImagesContainer from './Images.Container'

const Overlay = ({ onClickHandler, project, show }) => {
 
  const { header, subHeader, details, images, live, sourceCode } = project
  
  return (
    <Transition in={show} timeout={500} unmountOnExit>
      {(state) => (
        <div className={`overlay ${state}`}>
          <ImagesContainer images={images} />
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

import { useEffect, useState, useCallback } from 'react'

import './index.scss'
import Modal from './Modal'

import data from './data'

const MyWork = () => {
  const [projects, setProjects] = useState([])
  const [showOverlay, setShowOverlay] = useState(false)
  const [currentProjectId, setCurrentProjectId] = useState(null)

  const learnMoreBtnHandler =(id) => {
     setShowOverlay((prev) => !prev)
    setCurrentProjectId(id)
  }
  
  const showOverlayHandler = useCallback(()=> {
    setShowOverlay((prev) => !prev)
  },[]) 

  const project = currentProjectId? projects.find(project => project.id === currentProjectId) : null;

  useEffect(() => {
    setProjects(data)
  }, [])
  return (
    <div className="container my-work-page">
      {showOverlay ? <Modal onClickHandler={showOverlayHandler} project={project } /> : null}
      <section>
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <article key={project.name + idx}>
              <div className="bar">
                <i></i>
                <h3>{project.name}</h3>
              </div>
              <div className="article-content">
                <div className="article-modal">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  <button className="flat-button" onClick={()=>learnMoreBtnHandler(project.id)}>
                    Learn more
                  </button>
                </div>
                <img src={project.homePage} alt={project.name} />
              </div>
            </article>
          ))
        ) : (
          <h2>No Projects found</h2>
        )}
      </section>
    </div>
  )
}

export default MyWork

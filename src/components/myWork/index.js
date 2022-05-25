import './index.scss';

import projectImg from '../../assets/images/Screenshot (27).png'


const MyWork = () => {
  return(
      <div className='container my-work-page'>
          <section >
            <article>
              <div className='bar'>
              <i>
              </i>
              <h3>Kasper Template</h3>
              </div>
              <div className="article-content">
                <img src={projectImg} alt="kasper" />
              </div>
            </article>
            <article>
            <div className='bar'>
              <i>
              </i>
              <h3>Kasper Template</h3>
              </div>
              <div className="article-content">
                <img src={projectImg} alt="kasper" />
              </div>
            </article>
          </section>
      </div>
  )
}

export default MyWork
import './index.scss';

import projectImg from '../../assets/images/Screenshot (27).png'
import Logo from '../Ui/Logo';


const MyWork = () => {
  return(
      <div className='container my-work-page'>
          <section >
            <article>
              <h3>Kasper Template</h3>
              <div className="article-content">
                <img src={projectImg} alt="kasper" />
              </div>
            </article>
            <article>
              <h3>Kasper Template</h3>
              <div className="article-content">
                <img src={projectImg} alt="kasper" />
              </div>
            </article>
          </section>
          <Logo />
      </div>
  )
}

export default MyWork
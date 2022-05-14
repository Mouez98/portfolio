import './Home.scss'

import logoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';

const Home = () => {
     return (
         <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm 
                <img src={logoS} alt='developer' />
                lobodan
                <br />
                web developer 
            
                </h1>
                <h2>
                    Frontent developer / ReactJs
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME </Link>
            </div>
         </div>
     )
}

export default Home ;
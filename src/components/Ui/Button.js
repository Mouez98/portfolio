import './Button.scss';

const Button = ({text}) => {

     return (
         <div id='button'>
             <span className='bg'></span>
             <span className='base'></span>
             <span className='text'>{text}</span>
         </div>
     )
}

export default Button
import './Select.css'
import {Link}from 'react-router-dom'
import Fade from 'react-reveal/Fade';



const Select=()=> {

    
    return (
        <div  className='selector-container'>
          <div className='selector-content'>
        <Fade right> <div className='selector-options'>
             <Link to ='/animales'>
         
          
             <label>Conocer los animales</label>

      
             </Link>
             </div>
             <div className='selector-options'>
             <Link to ='/Vida'>
          
              <label>Conocer la asociación</label>
              </Link>
              </div>
              <div className='selector-options'>
              <Link to ='/AreaPrivada'>
              <label>Área Privada</label>
              </Link>
              </div>
              </Fade>  
          </div>
        </div>
    )
};
export default Select;
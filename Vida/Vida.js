import './Vida.css';
import Encuesta from './Encuesta';
import Footer from '../Footer/Footer'
import DogItem from '../Chat/DogItem';
import Asociacion from './Asociacion';
import Fade from 'react-reveal/Fade';

const Vida =()=>{
    return (
        <div className="vida-container">
            <div className="vida-content">
        
          <div className="vida-body">
              
              <div className="vida-partes">
       <Fade left>  <DogItem text={"El trabajo de la asociación es muy importante, igual que tu ayuda."}/></Fade> 
          </div>
       <Asociacion/>
         <Encuesta />
        
       
           <Footer/>
          
           </div>
           </div>
        </div>
    )
};
export default Vida;
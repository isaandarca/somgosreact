import './Animales.css';
import {useState,useEffect}from 'react';
import Fade from 'react-reveal/Fade';
import {Link}from 'react-router-dom'

import Footer from '../Footer/Footer';


const Animales =()=>{
  
    const [datos,setDatos]=useState([]);


    useEffect(() => {


        fetch('http://localhost:3001/listadoAnimales')
    
          .then(function (results) {
    
            return results.json();
    
          })
    
          .then(function (res) {
    
         setDatos(res)
    
           
    
          });
    
      }, []);
      
     
    
    
        const mostrarAnimales = datos.map((animal) => {
    
        return (
         <div className="animales-chat-container">
          <div className="animales-chat-content">
        
             <div className="animales-chat">
                
                <div className="animales-chat-container-body">
                 <h1>{animal.Nombre}</h1>
                  <Fade left><img src={animal.Imagen}alt=""/></Fade>
                  <p>Sexo:{animal.Sexo}</p>
                  <p>Especie:{animal.Especie}</p>
                  <p>Edad:{animal.Edad}</p>
                  <p>Raza:{animal.Raza}</p>
                  <p>Color:{animal.Color}</p>
                   <p>Vacunas:{animal.Vacunas}</p>
                    <p>Localidad:{animal.Localidad}</p>
                    <p>Estado:{animal.Estado}</p>
                
                <div className="animales- button">
                   <Link to="./Adoptar"><button
                type='submit'> Adoptar</button>
        
          
         
                </Link>
         


                </div>      
              </div>
           

         </div>
<Footer/>



       </div>
       
       
       

       </div>
       
 



         ) 
      });

    return (
        
          <div className="hi">
        
         
            {mostrarAnimales}
            </div>  
            

        
    )
};
export default Animales;

import './Encuesta.css'
import {useState,useEffect}from 'react'
import gatoAvatar from './Fotos/gato.PNG'
import Fade from 'react-reveal/Fade';

import perroAvatar from './Fotos/perro.PNG'









const Encuesta=()=>{
       const[megusta,setMegusta]=useState(0)
       const[megustados,setMegustados]=useState(0)
       const [datos,setDatos]=useState([]);
       const[datosperro,setDatosperro]=useState([]);
       const darMegusta=()=>{
       setDatos(datos+1) ;
        }
        const perroLover=()=>{
            setDatosperro(datosperro+1)
        }
      


       useEffect(() => {
   
   
           fetch('http://localhost:3001/catlover')
       
             .then(function (results) {
       
               return results.json();
       
             })
       
             .then(function (res) {
       console.log(res)
            setDatos(parseInt(res[0].catlover))

       
              
       
             });
       
         }, []);
         
        //  const catLover = datos.map((cat) => {
    
        //     return (
           
        //             <div>
                   
        //              <h1>{cat.catlover}</h1>
                   
                    
                 
            
            
             
                   
        //      </div>
    
    
                        
                  
               
   
    
    
           
           
           
    
          
           
     
    
    
    
        //      ) 
        //   });
    
        useEffect(() => {
   
   
            fetch('http://localhost:3001/doglover')
        
              .then(function (results) {
        
                return results.json();
        
              })
        
              .then(function (res) {
        console.log(res)
             setDatosperro(parseInt(res[0].doglover))
 
        
               
        
              });
        
          }, []);









    return (
        <div  className='encuesta-container'>
        <div className='encuesta-content'>
      
        {/* <label>Cat Lover</label>
        <label>Dog Lover</label> */}
        <Fade right> <div className='encuesta-options'>
     
     
         
            <img src={gatoAvatar}></img>
            <img src={perroAvatar}></img>
           
            
            </div>
            <div className="container-boton">
           
            <button onClick={darMegusta}>{datos}🤍</button>
           {/* { catLover} */}
            {/* <button onClick={darMegusta}>🤍</button> */}
            <button onClick={perroLover}>{datosperro}🤎</button>
            </div>
            </Fade>
            </div>











        </div>







        
    )
}
export default Encuesta;
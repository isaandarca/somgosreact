import './Datos.css';
import{useState,useEffect}from 'react'
import Footer from '../Footer/Footer'
import InfoAdoptar from './InfoAdoptar'

import {Link}from 'react-router-dom';









const Datos =(props)=>{

    const [adoptar,setAdoptar]=useState([]);
    const [url,setUrl]=useState("");


    useEffect(() => {


        fetch('http://localhost:3001/fichero')
    
          .then(function (results) {
    
            return results.json();
    
          })
    
          .then(function (res) {
            
    
         setAdoptar(res)
    
           
    
          });
    
      }, []);
      
      const handleChange=(e)=>{
        setUrl("http://localhost:3001/fichero/"+e.target.value);
      }
    
        const mostrarAdopcion = adoptar.map((adopcion) => {
    
        return  <option value={adopcion.Nombre}>{adopcion.Nombre}</option> 
               
               
                
             
          
         
               
          });

    return (
        <div className="datos-container">
         
          <div className="select">
          <h1> Fichero de Adopción</h1>
          <label>Busca por el nombre del animal adoptado</label>
           <select onChange={handleChange}> {mostrarAdopcion}</select>
          <Link to ='/registroAnimal'> <label>volver atrás</label></Link>
           </div>
            <InfoAdoptar url={url}/>
       
            <Footer/>
          </div>  
            

        
         );
}
export default Datos;
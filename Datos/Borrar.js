

import{useState}from 'react';
import Footer from '../Footer/Footer';
import animationLus from './38910-cat-escape.json'
import Modal from 'react-modal';
import './Borrar.css'
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';


const customStyles = {
  
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };



const Borrar =()=>{

    var subtitle;
    const [modalIsOpen,setIsOpen] =useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
    
      subtitle.style.color = '#432b51';
    }
   
    function closeModal(){
      setIsOpen(false);
      setNombre("");
    }



    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:animationLus

    };


const [Nombre,setNombre]=useState("")

    const borrarDatos=() => {


        fetch('http://localhost:3001/borrarAnimal', {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
             },
             body: JSON.stringify({Nombre:Nombre}),
           })
   
        
    
          .then(function (results) {
    
            return results.json();
    
          })
    
          .then(function (res) {
           
    
       
    
           
    
          });
          openModal()
    
      };
      const borrarNombre =(e)=>{
        setNombre(e.target.value)};



return (
    <div>
         
         <div className='borrar-container'>
       
       <div className='borrar-content'>
           <h2>Borrar animal del fichero</h2>
        
          <input type='text' name="Nombre" placeholder='Escribe el nombre del animal'onChange={borrarNombre}value={Nombre}/>
          <button onClick={borrarDatos}>Borrar</button>
    
      <label>Enhorabuena!! Ya tiene una familia 🤍 </label>
      <Link to='/registroAnimal'  >  <label>volver atrás</label></Link>
  
          </div>
          <Lottie 
            options={defaultOptions}/>
          </div>
        
          <Footer/>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Buen Trabajo !!</h2>
         
          <div>{Nombre} empieza una nueva vida!</div>
          <button onClick={closeModal}>cerrar</button>
          </Modal>
       
    </div>
    
)



}
export default Borrar;
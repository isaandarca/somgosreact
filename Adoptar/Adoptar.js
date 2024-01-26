import './Adoptar.css';
import{useState}from 'react';
import Modal from 'react-modal';
import Footer from '../Footer/Footer'








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

const Adoptar =()=>{



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



const [Nombre,setNombre]=useState("");
const [nombrePersona,setnombrePersona]=useState("");
const[email,setEmail]=useState("");
const [telefono,setTelefono]=useState("");
const[poblacion,setPoblacion]=useState("");
const[fechaPreadoptar,setfechaPreadoptar]=useState("");


  const mandarDatos=() => {


     fetch('http://localhost:3001/preadoptar', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({Nombre:Nombre,nombrePersona:nombrePersona,email:email,telefono:telefono,poblacion:poblacion,fechaPreadoptar:fechaPreadoptar}),
        })

     
 
       .then(function (results) {
 
         return results.json();
 
       })
 
       .then(function (res) {
        
 
    
 
        
 
       });
       openModal()
      
       setnombrePersona("")
       setEmail("")
       setTelefono("")
       setPoblacion("")
       setfechaPreadoptar("")
 
   };
   const actualizarNombre =(e)=>{
     setNombre(e.target.value);
   
   };
   const actualizarnombrePersona =(e)=>{
    setnombrePersona(e.target.value);
   
  };
  const actualizarEmail =(e)=>{
    setEmail(e.target.value);
 
  };
  const actualizarTelefono =(e)=>{
    setTelefono(e.target.value);
  
  };
  const actualizarPoblacion =(e)=>{
    setPoblacion(e.target.value);
    
  };
  const actualizarfechaPreadoptar =(e)=>{
    setfechaPreadoptar(e.target.value);
   
  };






  return  (
   
          
          <div className='adoptar-container'>
       
          <div className='adoptar-content'>
         
        
          <h2>Adoptar</h2>
          <label>Nombre Animal</label>
          <input type='text' name="Nombre" placeholder='Escribe el nombre del animal'onChange={actualizarNombre}value={Nombre}/>
          <label>Nombre Persona</label>
          <input type='text' name="nombrePersona"placeholder='Escribe tu nombre y apellido'onChange={actualizarnombrePersona}value={nombrePersona}/>
          <label>E mail</label>
          <input type='text' name="email"placeholder='Escribe tu email'onChange={actualizarEmail}value={email}/>
          <label>Teléfono</label>
          <input type='text' name="telefono"placeholder='Escribe tu telefono'onChange={actualizarTelefono}value={telefono}/>
          <label>Poblacion</label>
          <input type='text' name="poblacion"placeholder='Escribe tu población'onChange={actualizarPoblacion}value={poblacion}/>
          <label>Selecciona Fecha</label>
          <input type="date" name="fechaPreadoptar" placeholder="Selecciona la Fecha" onChange={actualizarfechaPreadoptar} value={fechaPreadoptar}></input>
        
           <button onClick={mandarDatos}>Enviar
            </button>



           
          
     
            </div>
             <div>
           <Footer/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Enhorabuena 😄!!</h2>
         
          <div>En breve la asociación se pondrá en contacto contigo para iniciar el proceso de adopción de {Nombre}</div>
          <button onClick={closeModal}>cerrar</button>
          </Modal>
         </div>
         </div>
         


     )

};

export default Adoptar;
import './registroAnimal.css';
import {useState}from'react';
import Modal from 'react-modal';

import Footer from '../Footer/Footer'
import {Redirect} from 'react-router-dom'
import {Link}from 'react-router-dom';

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





const RegistroAnimal=()=>{










const [Nombre,setNombre]=useState("");
const [Sexo,setSexo]=useState("");
const[Especie,setEspecie]=useState("");
const [Edad,setEdad]=useState("");
const[Raza,setRaza]=useState("");
const[Color,setColor]=useState("");
const [Vacunas,setVacunas]=useState("");
const [Localidad,setLocalidad]=useState("");
const [Estado,setEstado]=useState("");
const [Imagen,setImagen]=useState("");


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






const crearAnimal=() => {


    fetch('http://localhost:3001/registrarAnimal', {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({Nombre:Nombre,Sexo:Sexo,Especie:Especie,Edad:Edad,Raza:Raza,Color:Color,Vacunas:Vacunas,Localidad:Localidad,Estado:Estado,Imagen:Imagen}),
       })

    

      .then(function (results) {

        return results.json();

      })

      .then(function (res) {
       

   

       

      });



      <Redirect to="/RegistroAnimal"/>
      openModal()
      setSexo("")
      setEspecie("")
      setEdad("")
      setRaza("")
      setColor("")
      setVacunas("")
      setLocalidad("")
      setEstado("")
      setImagen("")

  };
  const actualizarNombre =(e)=>{
    setNombre(e.target.value);
  };
  const actualizarSexo =(e)=>{
      setSexo(e.target.value);
  };
  const actualizarEspecie =(e)=>{
    setEspecie(e.target.value);
};
const actualizarEdad =(e)=>{
    setEdad(e.target.value);
};
const actualizarRaza =(e)=>{
    setRaza(e.target.value);
};
const actualizarColor =(e)=>{
    setColor(e.target.value);
};
const actualizarVacunas =(e)=>{
    setVacunas(e.target.value);
};
const actualizarLocalidad =(e)=>{
    setLocalidad(e.target.value);
};
const actualizarEstado =(e)=>{
    setEstado(e.target.value);
};
const actualizarImagen =(e)=>{
    setImagen(e.target.value);
};






    
    return (
        <div>
              <div className='registro-container'>
          <div className='registro-content'>
          <h1>Registrar Animal</h1>
         
          <input type='text' name="Nombre" placeholder='Escribe el nombre del animal'onChange={actualizarNombre}value={Nombre}/>
        
          <input type='text' name="Sexo"placeholder='Escribe el sexo del animal'onChange={actualizarSexo}value={Sexo}/>
         
          <input type='text' name="Especie"placeholder='Escribe la especie'onChange={actualizarEspecie}value={Especie}/>
        
          <input type='text' name="Edad"placeholder='Escribe su edad'onChange={actualizarEdad}value={Edad}/>
        
          <input type='text' name="Raza"placeholder='Escribe su raza'onChange={actualizarRaza}value={Raza}/>
        
          <input type="text" name="Color" placeholder="Escribe su color" onChange={actualizarColor} value={Color}/>
       
          <input type="text" name="Vacunas" placeholder="Vacunas:si/no" onChange={actualizarVacunas} value={Vacunas}/>
        
          <input type="text" name="Localidad" placeholder="Localidad origen animal" onChange={actualizarLocalidad} value={Localidad}/>
        
          <input type="text" name="Estado" placeholder="Estado:En adopción" onChange={actualizarEstado} value={Estado}/>
          <input type="text" name="Imagen" placeholder="Introduce enlace foto" onChange={actualizarImagen} value={Imagen}/>
          
          <button onClick={crearAnimal}>Registrar</button>
          <Link to="/Datos"><label>ver fichas preadopciones</label></Link>
          <Link to="/Borrar"><label>borrar animal de fichero</label></Link>
          </div>
       </div>
       <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Genial 😄!!</h2>
         
          <div>Has añadido a {Nombre} en la lista de animales !!</div>
          <button onClick={closeModal}>cerrar</button>
          </Modal>


  <Footer/>
        </div>
    )
};

export default RegistroAnimal;
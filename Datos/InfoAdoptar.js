import{useState,useEffect}from 'react'

import './Infoadoptar.css'

const InfoAdoptar=(props)=>{
    const [adoptados,setAdoptados]=useState([])
  useEffect(()=>{
    fetch(props.url)
    .then((res)=>res.json())
    .then((res)=>{
      setAdoptados(res);
    })
  },[props.url]);
  const adopciones=adoptados.map((adopcion)=>{
      return (
          <div className="infoadoptar-continente">
          <div className="infoadoptar-container">
              <div className="infoadoptar-content">
       <p>Nombre animal:{adopcion.Nombre}</p>
       <p>Adoptante:{adopcion.nombrePersona}</p>
       <p>Email:{adopcion.email}</p>
       <p>Teléfono:{adopcion.telefono}</p>
       <p>Población:{adopcion.poblacion}</p>
       <p>Fecha adopción:{adopcion.fechaPreadoptar}
       </p>
       </div>
       </div>
       </div>)
  })
  return (
    <>{adopciones}</>
  )
  
  
  }
  export default InfoAdoptar;
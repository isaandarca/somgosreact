import './AreaPrivada.css';
import{useState}from 'react';
import Footer from '../Footer/Footer'
import {Redirect}from'react-router-dom'

const AreaPrivada =()=>{
     const [username,setUsername]=useState("");
     const [password,setPassword]=useState("");
     const [redirect,setRedirect]=useState(false)

  const Login=() => {


     fetch('http://localhost:3001/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username:username,password:password}),
        })

     
 
       .then(function (results) {
 
         return results.json();
 
       })
 
       .then(function (res) {
         setRedirect(res[0].administrador)
        
 console.log(res)
    
 
        
 
       });

     //   location.replace("/registroAnimal.html")
 
   };



   const enviarUsername =(e)=>{
     setUsername(e.target.value);
   };
   const enviarPassword=(e)=>{
        setPassword(e.target.value);
   };



if (redirect){
  return <Redirect to='/RegistroAnimal'/>
}else {



     return (

          <div className='input-container'>
             <div className='input-content'>
             <h1>Área Privada</h1>
             <label>Administrador</label>
             <input type='text'name="username" value={username}  placeholder='Administrador'onChange={enviarUsername}/>
             <label>Contraseña</label>
             <input type='password'name ="password" value={password} placeholder='Contraseña'onChange={enviarPassword}/>
             <button onClick={Login}>Entrar</button>
             </div>
      <Footer/>
          </div>
     )
     }
};
export default AreaPrivada;
import{BrowserRouter,Route}from 'react-router-dom';

import Home from './Home/Home';
import Datos from './Datos/Datos'
import Chat from './Chat/Chat'
import Animales from './Animales/Animales'
import Vida from './Vida/Vida';
import AreaPrivada from './AreaPrivada/AreaPrivada';
import Adoptar from './Adoptar/Adoptar';
import RegistroAnimal from './registroAnimal/registroAnimal';
import Borrar from './Datos/Borrar'

const Rutas =()=>{
    return(
        <BrowserRouter>
        <Route exact path="/">
            <Home/>

        </Route>
        <Route exact path="/Chat">
            <Chat/>

        </Route>
        <Route exact path="/Animales">
            <Animales/>
        </Route>
        <Route exact path="/Adoptar">
            <Adoptar/>
        </Route>
        
        <Route exact path="/Vida">
            <Vida/>
        </Route>
        <Route exact path="/AreaPrivada">
            <AreaPrivada/>
        </Route>
        <Route exact path="/RegistroAnimal">
            <RegistroAnimal/>
        </Route>
        <Route exact path="/Datos">
            <Datos/>
        </Route>
        <Route exact path="/Borrar">
            <Borrar/>
        </Route>
        
        
        
        
        </BrowserRouter>

    )
};
export default Rutas;
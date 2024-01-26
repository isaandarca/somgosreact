import Cat from './Cat.js';
import './Home.css'
import HeadShake from 'react-reveal/HeadShake'
import Fade from 'react-reveal/Fade';



const Home=()=>{
    return(
        <div className='todo-container'>
        <div className='todo-content'>
            <Cat/>
            <div className='titulo-container'>
                <Fade>
              <h3>SOMOS GOS</h3>
              <label>Haz click  en la aventura de adoptar</label>
              </Fade>
              <HeadShake>
              <h2>¡Qué ganas de conocerte !</h2>
              </HeadShake>
            
            </div>

        </div>
        </div>
    )
}
export default Home;
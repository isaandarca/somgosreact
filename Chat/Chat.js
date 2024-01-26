import './Chat.css';
import DogItem from './DogItem.js';


import Select from './Select.js';

import Fade from 'react-reveal/Fade';

const Chat =()=>{

    





    return (
        <div className='chatbot-chat-container'> 
           <div className='chatbot-chat-content'>
               <div className='chatbot-chat'>
                   <div className ='chatbot-chat-container-body'>
                       <Fade left>
                       <DogItem text={"¡Hola!😃 Elige una opción..."}/>
                       </Fade>
                  
                   </div>
                   <Select/>
                 
                
               </div>


           </div>
        </div>

    )
};

export default Chat;
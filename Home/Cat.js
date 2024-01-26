import Lottie from 'react-lottie';
import './Cat.css'
import animationGos from './4888-dog-icon.json';
import {Link}from 'react-router-dom';

const Cat=()=>{
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:animationGos

    };
  
    return(
        <Link to="/chat"><div 
        className='pet-container'>
            <Lottie 
            options={defaultOptions}/>
          

        </div></Link>
    )
};
export default Cat;
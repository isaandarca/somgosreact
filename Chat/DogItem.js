import './DogItem.css'
import dogAvatar from './Assets/Dog.PNG';



const DogItem=(props)=>{
    return (
        <div className='dog-item-container'>
            <img src={dogAvatar} alt=''/>
            <div className='dog-item-mensajes'>
                <label>{props.text}</label>
            </div>
        
        </div>
    )
};
export default DogItem;
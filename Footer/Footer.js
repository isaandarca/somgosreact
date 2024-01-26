import './Footer.css';
import {Link} from 'react-router-dom'
import homeAvatar from './Fotos/home.PNG'


const Footer = () =>{
    return (

        <div className="footer">
            <nav class="navbar fixed-bottom navbar-light bg-light">

                <Link to="/chat"> <img src={homeAvatar} alt="" /></Link>



            </nav>
        </div>

    );
}
export default Footer;
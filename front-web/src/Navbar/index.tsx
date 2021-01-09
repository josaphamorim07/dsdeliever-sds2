import './styles.css';
import logo from './Group.svg';
import { Link } from 'react-router-dom';


function Navbar() {


    return (

        <nav className="main-navbar">
            <img src={logo} alt="logo" />
            <Link to="/" href="home" className="Logo-text">DS delivery</Link>

        </nav>



    );
}

export default Navbar;

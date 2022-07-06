import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
        <nav>
          <ul>
            <div><Link to="/home"><img src={Logo} alt="Logo" className="logo" /></Link></div>
            <li><NavLink activeClassName='active' to="/home">Home</NavLink></li> 
            <li><NavLink activeClassName='active' to="/productos">Productos</NavLink></li>
            <li><NavLink activeClassName='active' to="/contacto">Contacto</NavLink></li>
            <li><NavLink activeClassName='active' to="/nosotros">Nosotros</NavLink></li>
            <CartWidget />
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;
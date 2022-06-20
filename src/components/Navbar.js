import './Navbar.css';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className='navbar'>
        <nav>
          <ul>
            <a><img src={Logo} alt="Logo" class="logo"/></a>
            <p className="name"><em>Mente emprendedora</em></p>
            <li><a src="../index.html">Home</a></li> 
            {/* ¿Cómo deberia insertar las páginas? */}
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nosotros</a></li>
            {/* <li><button>Carro</button></li> */}
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;
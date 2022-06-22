import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
        <nav>
          <ul>
            <li><a src="../index.html">Home</a></li> 
            {/* ¿Cómo deberia insertar las páginas? */}
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nosotros</a></li>
            <CartWidget />
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;
import './CartWidget.css';
import Cart from '../assets/shopping-cart.png';

function CartWidget() {
  return (
    <div>
        <img src={Cart} alt="Logo" class="cartWidget"/>
    </div>
  );
}

// render(<CartWidget  Cart='../assets/shopping-cart.png'/>, document.getElementById('root'));
// ¿Qué significa renderizar?

export default CartWidget;
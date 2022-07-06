import './CartWidget.css';
import Cart from '../assets/shopping-cart.png';

function CartWidget() {
  return (
    <div>
        <img src={Cart} alt="Logo" className="cartWidget"/>
    </div>
  );
}
export default CartWidget;
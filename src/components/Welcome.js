import './Welcome.css';
import Logo from '../assets/logo.png';

function Welcome({ name , placeholder}) {
  return (
    <div className="welcome">
        <h2><a href="#"><img src={Logo} alt="Logo" class="logo"/></a><em>{name}</em></h2>
        <input type='text' placeholder={placeholder} className="inputBuscar"></input>
    </div>
  );
}
export default Welcome;
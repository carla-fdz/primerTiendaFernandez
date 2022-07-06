import './Welcome.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Welcome({ name , placeholder}) {
  return (
    <div className="welcome">
        <h2><Link to="/home"><img src={Logo} alt="Logo" className="logo"/></Link><em>{name}</em></h2>
        <input type='text' placeholder={placeholder} className="inputBuscar"></input>
    </div>
  );
}
export default Welcome;
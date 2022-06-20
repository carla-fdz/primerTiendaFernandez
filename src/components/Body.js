import './Body.css';
import Card from './Card';
import Contacto from './Contacto';

function Body() {
  return (
    <section className="cuerpo">
        <Card />
        <Card />
        <Card />
        <Contacto />
    </section>
  );
}

export default Body;
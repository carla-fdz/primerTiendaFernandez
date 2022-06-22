import './Body.css';
import ItemListContainer from './ItemListContainer';
import Card from './Card';

function Body() {
  return (
    <section className="cuerpo">
      <ItemListContainer title='Bienvenido a nuestra tienda'/>
      <Card product='Combo 1' price='$4000' img=''/>
      <Card product='Combo 2' price='$5600'/>
      <Card product='Combo 3' price='$7800'/>
    </section>
  );
}

export default Body;
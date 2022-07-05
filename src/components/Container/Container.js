import './Container.css';
import CardList from '../CardList/CardList';
import CardsContent from '../CardsContent';

function Container(){
  return (
    <div className="container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
      <h2>Catálogo</h2>
      <CardList cards={CardsContent}/>
    </div>
  );
}
export default Container;

import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import CardsContent from '../CardsContent';
import ItemDetailContainer from '../ItemDetail.js/ItemDetailContainer';


function ItemListContainer(){
  return (
    <div className="container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
      <h2>Catálogo</h2>
      <ItemList cards={CardsContent}/>
      <button onClick={ItemDetailContainer}>Ver productos</button>
    </div>
  );
}
export default ItemListContainer;

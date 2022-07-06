import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import CardsContent from '../CardsContent';
import { useState } from 'react';

function ItemListContainer(){
  const [cardsFetch , setCardsFetch] = useState([])
  const fetchCards = () => {
    fetch("public/catalogo.json")
    .then((resp) => resp.json())
    .then((data) => setCardsFetch(data))
  }

  return (
    <div className="container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
      <h2>Catálogo</h2>
      <button onClick={fetchCards}>Ver productos</button>
      <ItemList cards={cardsFetch}/>
      <ItemList cards={CardsContent}/>
    </div>
  )
}
export default ItemListContainer;

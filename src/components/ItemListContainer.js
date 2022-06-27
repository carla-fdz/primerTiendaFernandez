import ItemCount from './ItemCount';
import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
    <section className="catalogo">
        <div className="titleCatalogue">
            <h1>{props.title}</h1>
            <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
            <h3>Catálogo de libros</h3>
            <ItemCount stock={5}/>
            <ItemCount stock={10}/>
        </div>
    </section>
  );
}
export default ItemListContainer;
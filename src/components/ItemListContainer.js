import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import Card from './Card';
import './ItemListContainer.css';

function ItemListContainer(props) {
  const [products, setProducts] = useState()

  useEffect(()=> {
    setTimeout(
      ()=>{
        fetch('catalogo.json') //Trae el Responde completo
        .then((resp)=> resp.json()) //Extrae la información a utilizar de dentro de el Response
        .then((data)=> setProducts(data)) //Setear esa información en nuestro State
}, 1000)
});
    
  return (
    <section>
        <div className="titleCatalogue">
            <h1>{props.title}</h1>
            <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
            <h3>Catálogo de libros</h3>
            <ItemCount stock={5}/>
            <ItemCount stock={10}/>
        </div>
        <div className="catalogo">
        <Card product='Combo 1' price='$4000'/>
        {products && products.map(product => <Card product={product.nombre} price={product.precio} />)}
        </div>
    </section>
  );
}
export default ItemListContainer;
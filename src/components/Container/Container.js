import { useState } from 'react';
import './Container.css';
import CardList from '../CardList/CardList';

function Container() {

  //Arreglar esto!

  // const [booksFetch, setBooksFetch] = useState([]);
  // const cardsContent = () => {
  //   fetch('catalogo.json')
  //   .then((resp) => {return resp.json()})
  //   .then((data) => setBooksFetch(data));
  // }
  // }

  const cardsContent = [
  {id: 1,
  img: "#",
  title: "Libro 1",
  description: "Libro + Libro",
  price: "$3500",
  stock: 3,
  },
  {id: 2,
  img: "#",
  title: "Combo 2",
  description: "Libro + Libro",
  price: "$5600",
  stock: 3,
  },
  {id: 3,
  img: "#",
  title: "Combo 3",
  description: "Libro + Libro",
  price: "$6800",
  stock: 3,
  },
  {id: 3,
    img: "#",
    title: "Combo 3",
    description: "Libro + Libro",
    price: "$6800",
    stock: 3,
  },
]
  return (
    <div className="container">
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Encontrá los mejores libros para aprender a programar y los artículos más innovadores para armar tu setup</p>
      <h2>Catálogo</h2>
      <CardList cards={cardsContent}/>
    </div>
  );
}
export default Container;

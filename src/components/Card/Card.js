import './Card.css';
import ItemCount from '../ItemCount';

function Card(props) {
  return (
    <div >
      <div className="card">
        <img>{props.img}</img>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>{props.price}</p>
          </div>
      </div>
      <ItemCount stock={10}/>
    </div>
  );
}

export default Card;
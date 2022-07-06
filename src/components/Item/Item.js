import './Item.css';
import ItemCount from '../ItemCount';

function Item(props) {
  return (
    <div >
      <div className="card">
        {/* <img className="imgProduct" src="">{props.img}</img> */}
        {/* Revisar esto, comparar con proyecto anterior */}
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

export default Item;
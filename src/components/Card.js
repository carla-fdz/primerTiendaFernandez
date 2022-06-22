import './Card.css';

function Card({ product , price , img }) {
  return (
    <div className="card">
        <div>
        <img src={img}/>
        <h4>{product}</h4>
        <p>{price}</p></div>
    </div>
  );
}

export default Card;
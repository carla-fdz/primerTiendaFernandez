import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {
  return (
    <div className='cardList'>
        {props.cards.map((card)=>(
            <Card 
            title={card.title}
            description={card.description}
            price={card.price}
            />
        ))}
    </div>
  );
}

export default CardList;

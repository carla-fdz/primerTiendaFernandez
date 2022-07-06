import Item from '../Item/Item';
import './ItemList.css';

function ItemList(props) {
  return (
    <div className='cardsList'>
        {props.cards.map((card)=>(
            <Item 
            img={card.img}
            title={card.title}
            description={card.description}
            price={card.price}
            />
        ))}
    </div>
  );
}

export default ItemList;

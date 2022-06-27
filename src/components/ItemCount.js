import { useState } from "react";
import './ItemCount.css';

function ItemCount({ stock, initial=1}){
    const [num, setNum] = useState (initial);
    const sumar = () => {
        if(num<stock){
            setNum(num + 1);
        }
    }
    const restar = () => {
        if(num>initial){
            setNum(num - 1)
        }
    }
    const reiniciar = () => {
        setNum(initial)
    }
    return(
        <>
        <div className='itemCount'>
            <button onClick={restar} className="buttonOperaciones"> - </button>
            <p className="num">{num}</p>
            <button onClick={sumar} className="buttonOperaciones"> + </button>
        </div>
        <button onClick={reiniciar} className="buttonOpcion">Reiniciar</button>
        <button className="buttonOpcion">Agregar al carrito</button>
        </>
    )
}

export default ItemCount;
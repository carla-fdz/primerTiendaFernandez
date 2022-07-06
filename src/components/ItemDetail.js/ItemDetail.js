import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail(){
    const [info, setInfo] = useState([])
    const { id } = useParams()
    
    const fetchCard = () => {
        fetch("public/catalogo.json")
        .then((response) => {
            console.log(response)
            response.json()
        })
        .then((data)=> setInfo(data.find((item) => item.id === id)))
    }

    useEffect(()=>{
        fetchCard()
    }, [])

    return(
        <div>
            {info.length !==0 && <h2>Nombre: {info[0].title}</h2>}
        </div>
    )
}

export default ItemDetail;
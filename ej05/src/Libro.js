import { useState } from "react"

function Libro(props) {

    let [stock, setStock] = useState(3)

    return (
        <div className="card">
            <h2>{props.libro.title}</h2>
            <img src= {props.libro.formats["image/jpeg"]} alt={props.libro.title} />
            <p>Autor: {props.libro.authors[0].name}</p>
            <p>Stock disponible: {stock}</p>
            <button onClick={ () => stock > 1? setStock(stock - 1) : setStock("No disponible")}>Comprar</button>
        </div>
    )
}

export default Libro
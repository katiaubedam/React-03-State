function Casa(props){
    return (
        <div>
            <h3>Casa {props.index}</h3>
            <p>Pisos: {props.casa.pisos}</p>
            <p>Material: {props.casa.material}</p>
            <p>Barrio: {props.casa.barrio}</p>
            <p>Calefacción: {props.casa.calefaccion? "Sí" : "No"}</p>
        </div>
    )
}

export default Casa
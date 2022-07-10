function Cabecera (props) {
    return (
        <header>
            <h1>Biblioteca Hush</h1>
            <img src={props.usuario.imagen} />
            <p>{props.usuario.vip? "Te damos la bienvenida, "+ props.usuario.nombre + "!" : props.usuario.nombre}</p>
        </header>
    )
}

export default Cabecera
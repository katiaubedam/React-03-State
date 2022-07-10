import './App.css';
import persona from './persona';

function App() {
  return (
    <>
      <h1>{persona.nombre}</h1>
      <div>
        <p>Edad: {persona.edad}</p>
        <p>Nacimiento: {persona.nacimiento}</p>
        <p>Dirección:</p>
        <ul>
          <li>Calle: {persona.direccion.calle}</li>
          <li>Número: {persona.direccion.numero}</li>
          <li>Piso: {persona.direccion.piso}</li>
          <li>Código Postal: {persona.direccion.cp}</li>
          <li>Ciudad: {persona.direccion.ciudad}</li>
        </ul>
        <p>Grupo Sanguíneo: {persona.grupoSanguineo.grupo}{persona.grupoSanguineo.rh}</p>
      </div>
    </>
  );
}

export default App;

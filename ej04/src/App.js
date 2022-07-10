import { useState } from 'react';
import './App.css';

function App() {

  let [estado, setEstado] = useState(1)

  return (
    <>
    <h1>Valor del estado: {estado}</h1>
    <button onClick={ ()=> setEstado(estado + 1)}>Incrementar</button>
    <button onClick={ ()=> setEstado(estado - 1)}>Decrementar</button>
    </>
  );
}

export default App;

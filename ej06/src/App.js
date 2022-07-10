import { useState } from 'react';
import './App.css';

let turno = "X"
let partidaActiva = true

function App() {

  let [tablero, setTablero] = useState(["", "", "", "", "", "", "", "", ""])
  let [mensaje, setMensaje] = useState("")

  function hazJugada(id){

    let newTablero = [...tablero]

    if (newTablero[id] === "" && partidaActiva) {
      newTablero[id] = turno
      setTablero(newTablero)
  
      comprobarVictoria(newTablero)
      cambiaTurno()
    }
  }

  function cambiaTurno() {
    turno === "X" ? turno = "O" : turno = "X"
  }

  function comprobarVictoria(tablero) {
    const combinaciones =  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
    ]

    let victoria = true

    for (let i = 0; i < combinaciones.length; i++) {
      
      victoria = true // Presuponemos victoria hasta que se demuestre lo contrario

      for (let j = 0; j < combinaciones[i].length; j++) {
        if (tablero[combinaciones[i][j]] !== turno) {
          victoria = false
          break
        }
      }

      if (victoria) break;
    }

    if (victoria) {
      setMensaje("Victoria de " + turno + "!!")
      partidaActiva = false
    } else if (tablero.join('').length === 9) { 
      // Si no hay victoria, comprueba empate:
      // Si el resultado de juntar todo el array Tablero en un string tiene un longitud de 9
      // Significa que todas las casillas han sido rellenadas, y por lo tanto, hay empate
      setMensaje("Ha habido empate!!")
      partidaActiva = false
    }
  }

  return (
    <div>
      <div className="container">
        <button onClick={() => hazJugada(0)}>{tablero[0]}</button>
        <button onClick={() => hazJugada(1)}>{tablero[1]}</button>
        <button onClick={() => hazJugada(2)}>{tablero[2]}</button>
        <button onClick={() => hazJugada(3)}>{tablero[3]}</button>
        <button onClick={() => hazJugada(4)}>{tablero[4]}</button>
        <button onClick={() => hazJugada(5)}>{tablero[5]}</button>
        <button onClick={() => hazJugada(6)}>{tablero[6]}</button>
        <button onClick={() => hazJugada(7)}>{tablero[7]}</button>
        <button onClick={() => hazJugada(8)}>{tablero[8]}</button>
      </div>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;

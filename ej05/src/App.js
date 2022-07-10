import biblioteca from './biblioteca'
import Cabecera from './Header';
import Libro from './Libro';
import './App.css';

function App() {

  let arrLibros = biblioteca.libros.map((libro, index) => {
      return (<Libro key={index} libro={libro} />)
  })

  return (
    <div className="wrapper">
      <Cabecera usuario={biblioteca.usuario} />
      <main className="container">
        {arrLibros}
      </main>
    </div>
  );
}

export default App;

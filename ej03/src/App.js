import casas from './casas';
import Casa from './Casa';
import './App.css';

function App() {

  let arrFinal = casas.map((casa, index) => {
      return (<Casa key={index} casa={casa} index={index+1} />)
  })

  return (
    <>
      {arrFinal}
    </>
  );
}

export default App;

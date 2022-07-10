import './App.css';

function App() {

  let pokemons = ["Charmander", "Squirtle", "Bulbasaur"]

  return (
    <>
      <ul>
        {pokemons.map((pokemon) => <li>{pokemon}</li>)}
      </ul>
    </>
  );
}

export default App;

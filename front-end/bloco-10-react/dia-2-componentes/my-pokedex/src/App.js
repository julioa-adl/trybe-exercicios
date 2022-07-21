import Pokedex from './components/Pokedex';
import pokemons from '../src/data';

function App() {
  return(
    <main>
      <Pokedex data={ pokemons }/>
    </main>
  ) 
}

export default App;

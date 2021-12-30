import { useContext } from 'react';
import { PokemonsTypes } from 'context/types/Pokemons';
import { PokemonsContext } from 'context/provider/Pokemons';

const usePokemons = (): PokemonsTypes => {
  const context = useContext(PokemonsContext);

  if (!context) {
    throw new Error('usePokemons must be used whit PokemonsContext');
  }

  return context;
};

export default usePokemons;

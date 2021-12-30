import {
  PokemonsProps,
  PokemonsProviderProps,
  PokemonsTypes,
} from 'context/types/Pokemons';
import { createContext, useCallback, useState } from 'react';
import { Pokemons } from 'service/pokemons';

const PokemonsContext = createContext({} as PokemonsTypes);

const PokemonsProvider = ({ children }: PokemonsProviderProps) => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState('');
  const [step, setStep] = useState(1);

  const getPokemons = useCallback(async (next: string) => {
    const { data } = await Pokemons.all(
      next.replace('https://pokeapi.co/api/v2/pokemon', '')
    );
    setNext(data.next);
    setPokemons(data.results);
  }, []);

  const getPokemonDetails = useCallback(async (name: string) => {
    const { data } = await Pokemons.getDetails(name);
    const { sprites } = data;
    const { other } = sprites;
    const pokemonDetails: PokemonsProps = {
      id: data.id,
      name: data.name,
      order: data.order.toString(),
      image: other['official-artwork'].front_default,
    };
    return pokemonDetails;
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        getPokemons,
        getPokemonDetails,
        next,
        step,
        setStep,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsProvider };

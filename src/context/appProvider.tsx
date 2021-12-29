import React from 'react';
import { PokemonsProvider } from './provider/Pokemons';

type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <PokemonsProvider>{children}</PokemonsProvider>;
};

export default AppProvider;

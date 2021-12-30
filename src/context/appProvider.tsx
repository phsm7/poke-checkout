import React from 'react';
import { CheckoutProvider } from './provider/Checkout';
import { PokemonsProvider } from './provider/Pokemons';

type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <PokemonsProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </PokemonsProvider>
  );
};

export default AppProvider;

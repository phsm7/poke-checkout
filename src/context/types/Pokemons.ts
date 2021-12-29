export type PokemonsProviderProps = {
  children: React.ReactNode;
};

export type PokemonsTypes = {
  pokemons: PokemonsProps[];
  getPokemons: (next: string) => void;
  next: string;
  getPokemonDetails: (name: string) => Promise<PokemonsProps>;
};

export type PokemonResultsProps = {
  name: string;
  url: string;
};
export type PokemonsResultsProps = {
  name: string;
  url: string;
};
export type PokemonsProps = {
  id: number;
  name: string;
  image: string;
  order: string;
};

import usePokemons from 'context/hooks/usePokemons';
import { PokemonsProps } from 'context/types/Pokemons';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import Zoom from 'react-reveal/Zoom';

type CardProps = {
  name: string;
  image: string;
  children: React.ReactNode | React.ReactNode[];
};

export default function Card({ name, children }: CardProps) {
  const { getPokemonDetails } = usePokemons();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonsProps>(
    {} as PokemonsProps
  );

  async function loadImage() {
    const response = await getPokemonDetails(name);
    setPokemonDetails(response);
  }

  useEffect(() => {
    loadImage();
  }, [name]);

  return (
    <Zoom>
      <Styled.Wrapper>
        <Styled.Card>
          <Styled.Image src={pokemonDetails.image} alt="imagem do pokemon" />
          <Styled.Title>{pokemonDetails.name}</Styled.Title>
          <Styled.Text>
            <span>R$</span>
            {pokemonDetails.order},00
          </Styled.Text>
          {children}
        </Styled.Card>
      </Styled.Wrapper>
    </Zoom>
  );
}

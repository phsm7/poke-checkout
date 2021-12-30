import usePokemons from 'context/hooks/usePokemons';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export default function CheckoutSuccess() {
  const [imagePokemon, setImagePokemon] = useState('');
  const { getPokemonDetails } = usePokemons();

  async function loadImage() {
    const response = await getPokemonDetails('bulbasaur');
    setImagePokemon(response.image);
  }

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Title>Parabéns!</Styled.Title>
      <Styled.Text>
        Você acabou de comprar
        <br /> seu Pokémon
      </Styled.Text>
      <Styled.Image src={imagePokemon} alt="Exibe o Pokemon Bulbasauro" />
      <Styled.Description>
        O seu pedido já está
        <br /> sendo processado.
      </Styled.Description>
    </Styled.Wrapper>
  );
}

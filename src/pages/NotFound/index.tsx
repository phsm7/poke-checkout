import BaseTemplate from 'templates/BaseTemplate';

import * as Styled from './styles';
import Footer from 'components/Footer';
import { useEffect, useState } from 'react';
import usePokemons from 'context/hooks/usePokemons';

export default function NotFound() {
  const [imagePokemon, setImagePokemon] = useState('');
  const { getPokemonDetails } = usePokemons();

  async function loadImage() {
    const response = await getPokemonDetails('bellsprout');
    setImagePokemon(response.image);
  }

  useEffect(() => {
    loadImage();
  }, []);
  return (
    <BaseTemplate>
      <Styled.Content>
        <Styled.Image src={imagePokemon} alt="imagem de um pokemon" />
        <Styled.Title>404</Styled.Title>
        <Styled.Text>A página não foi encontrada.</Styled.Text>
        <Styled.Link to={'ofertas'}>Acesse nossas ofertas</Styled.Link>
      </Styled.Content>
      <Footer textColor="gray" />
    </BaseTemplate>
  );
}

import Button from 'components/Button';
import usePokemons from 'context/hooks/usePokemons';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function PokemonNotFound() {
  const [imageZubat, setImageZubat] = useState('');
  const { getPokemonDetails } = usePokemons();

  async function loadImage() {
    const response = await getPokemonDetails('zubat');
    setImageZubat(response.image);
  }

  useEffect(() => {
    loadImage();
  }, []);

  const { getPokemons, next } = usePokemons();
  return (
    <Styled.NotFoundWrapper>
      <Fade left>
        <Styled.Image src={imageZubat} alt="imagem de um pokemon" />
      </Fade>
      <Zoom>
        <Styled.Title>Que pena...</Styled.Title>
        <Styled.Text>Nenhum pokémon disponível</Styled.Text>
        <Styled.Text> para a sua cidade.</Styled.Text>
        <Button
          size="normal"
          color="blue"
          margin="4.8rem 0 0 0"
          onClick={() => getPokemons(next)}
        >
          TENTE DE NOVO
        </Button>
      </Zoom>
    </Styled.NotFoundWrapper>
  );
}

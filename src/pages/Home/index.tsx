import Footer from 'components/Footer';
import BaseTemplate from 'templates/BaseTemplate';
import * as Styled from './styles';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import usePokemons from 'context/hooks/usePokemons';
import { FormEvent, useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Input } from 'components/Input';

export default function Home() {
  const navigate = useNavigate();
  const [imagePikachu, setImagePikachu] = useState('');
  const { getPokemonDetails } = usePokemons();

  async function loadImage() {
    const response = await getPokemonDetails('pikachu');
    setImagePikachu(response.image);
  }

  useEffect(() => {
    loadImage();
  }, []);

  const handleNext = (ev: FormEvent) => {
    ev.preventDefault();
    navigate('/404');
  };

  return (
    <BaseTemplate useBackground>
      <Styled.Wrapper>
        <Fade right>
          <Styled.Image src={imagePikachu} alt="imagem de um pokemon" />
        </Fade>
        <Zoom>
          <Styled.Content>
            <Styled.Title>Pokémon pra vc</Styled.Title>
            <Input type="text" width="medium" placeholder="Telefone" />
            <Input type="text" width="medium" placeholder="Cidade" />
            <Button
              type="submit"
              size="normal"
              color="yellow"
              margin="8rem 0 0 0"
              onClick={handleNext}
            >
              ENTRAR
            </Button>
          </Styled.Content>
        </Zoom>
      </Styled.Wrapper>

      <Zoom>
        <Footer textColor="white" />
      </Zoom>
    </BaseTemplate>
  );
}

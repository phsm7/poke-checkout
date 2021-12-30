import Footer from 'components/Footer';
import BaseTemplate from 'templates/BaseTemplate';
import * as Styled from './styles';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import usePokemons from 'context/hooks/usePokemons';
import { FormEvent, useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { HomeProps } from 'context/types/HomeTypes';
import { phoneMask } from 'utils/masks/phoneMask';
import { stringMask } from 'utils/masks/stringMask';

export default function Home() {
  const navigate = useNavigate();
  const [imagePikachu, setImagePikachu] = useState('');
  const [data, setData] = useState<HomeProps>({} as HomeProps);
  const { getPokemonDetails } = usePokemons();

  async function loadImage() {
    const response = await getPokemonDetails('pikachu');
    setImagePikachu(response.image);
  }

  useEffect(() => {
    loadImage();
  }, []);

  const handleNext = (event: FormEvent) => {
    event.preventDefault();
    navigate('/ofertas');
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
            <input
              type="text"
              width="medium"
              placeholder="Telefone"
              value={data.phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, phone: phoneMask(event.target.value) });
              }}
            />
            <input
              type="text"
              width="medium"
              placeholder="Cidade"
              value={data.city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, city: stringMask(event.target.value) });
              }}
            />
          </Styled.Content>
          <Button
            type="submit"
            size="normal"
            color="yellow"
            margin="8rem 0 0"
            onClick={handleNext}
          >
            ENTRAR
          </Button>
        </Zoom>
      </Styled.Wrapper>

      <Zoom>
        <Footer textColor="white" />
      </Zoom>
    </BaseTemplate>
  );
}

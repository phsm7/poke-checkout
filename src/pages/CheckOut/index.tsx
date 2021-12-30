import Footer from 'components/Footer';
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import CircleSteps from 'components/CircleSteps';
import CheckoutSuccess from 'components/CheckoutSuccess';
import usePokemons from 'context/hooks/usePokemons';
import { PokemonsProps } from 'context/types/Pokemons';
import CheckoutPersonalData from 'components/CheckoutPersonalData';
import CheckoutPayment from 'components/CheckoutPayment';
import CheckoutHeading from 'components/CheckoutHeading';

export default function CheckOut() {
  const navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState<PokemonsProps>({} as PokemonsProps);
  const { getPokemonDetails, step } = usePokemons();

  const [imagePikachu, setImagePikachu] = useState('');

  async function loadImagePikachu() {
    const response = await getPokemonDetails('pikachu');
    setImagePikachu(response.image);
  }
  useEffect(() => {
    loadImagePikachu();
  }, []);

  async function loadDetails(name: string) {
    const response = await getPokemonDetails(name);
    setDetails(response);
  }

  useEffect(() => {
    !params.name ? navigate('404') : loadDetails(params.name);
  }, [params.name]);

  return (
    <>
      <Styled.Wrapper>
        {!(step === 3) && <CheckoutHeading />}
        <div>
          {step === 1 && <Styled.Title>Dados Pessoais</Styled.Title>}
          {step === 2 && <Styled.Title>Pagamento</Styled.Title>}
          {step === 3 && (
            <Styled.SuccessImageWrapper>
              <Styled.SucessImage
                src={imagePikachu}
                alt="imagem do pokemon pikachu"
              />
            </Styled.SuccessImageWrapper>
          )}
          <Styled.CircleWrapper>
            <CircleSteps step={step} />
          </Styled.CircleWrapper>
          <Styled.Content>
            {(step === 1 || step === 2) && (
              <Styled.OrderWrapper>
                <Styled.OrderTitle>Meu Pedido</Styled.OrderTitle>
                <Styled.OrderDescription>
                  <p>{details.name}</p>
                  <span>R$ {details.order},99</span>
                </Styled.OrderDescription>
              </Styled.OrderWrapper>
            )}
            {step === 1 && <CheckoutPersonalData />}
            {step === 2 && <CheckoutPayment />}
            {step === 3 && <CheckoutSuccess />}
          </Styled.Content>
        </div>
        <Footer textColor={step === 3 ? 'gray' : 'black'} />
      </Styled.Wrapper>
    </>
  );
}

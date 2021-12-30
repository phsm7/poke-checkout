import * as Styled from './styles';
import pikachuBack from 'assets/pikachu_back.svg';
import LeftArrow from 'assets/LeftArrow';
import usePokemons from 'context/hooks/usePokemons';
import { useNavigate } from 'react-router-dom';

export default function CheckoutHeading() {
  const { step, setStep } = usePokemons();
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <Styled.HeadingLeftIcon>
        <LeftArrow />
        <img
          src={pikachuBack}
          alt="icone para voltar exibindo uma imagem do pikachu de costas"
          onClick={() => {
            step > 1 ? setStep((state) => state - 1) : navigate('/ofertas');
          }}
        />
      </Styled.HeadingLeftIcon>
      <span>21 99999-9999</span>
    </Styled.Wrapper>
  );
}

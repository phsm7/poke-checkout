import * as Styled from './styles';
import pikachuBack from 'assets/pikachu_back.svg';

export default function OffersHeading() {
  return (
    <Styled.Wrapper>
      <img
        src={pikachuBack}
        alt="icone para voltar - exibe o pikachu de costas"
      />
      <h1>Pokémon pra vc</h1> <span>21 99999-9999</span>
    </Styled.Wrapper>
  );
}

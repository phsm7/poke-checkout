import * as Styled from './styles';
import pikachuBack from 'assets/pikachu_back.svg';

export default function OffersHeading() {
  return (
    <Styled.Wrapper>
      <Styled.LeftContent>
        <img
          src={pikachuBack}
          alt="icone para voltar - exibe o pikachu de costas"
        />
        <h1>Pokémon pra vc</h1>
      </Styled.LeftContent>
      <span>21 99999-9999</span>
    </Styled.Wrapper>
  );
}

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-family: 'PokemonSolid';
      font-size: 2rem;
      color: ${theme.colors.yellow};
      font-weight: ${theme.font.regular};
      font-style: normal;
      text-align: center;

      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000000;
    }

    span {
      font-size: 1.2rem;
      font-weight: ${theme.font.regular};
      font-style: normal;
    }
  `}
`;

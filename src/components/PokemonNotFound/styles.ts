import styled, { css } from 'styled-components';

export const NotFoundWrapper = styled.div``;

export const Image = styled.img`
  width: 127.6px;
  height: 110.6px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'PokemonSolid';
    font-size: 3.5rem;
    color: ${theme.colors.blueSecondary};
    font-weight: ${theme.font.regular};
    font-style: normal;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    &:last-of-type {
      margin-top: 1rem;
    }
  `}
`;

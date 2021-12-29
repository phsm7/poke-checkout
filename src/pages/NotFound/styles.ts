import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const Image = styled.img`
  width: 104.4px;
  height: 110.2px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'PokemonSolid';
    font-size: 3.5rem;
    color: #c68510;
    font-weight: ${theme.font.regular};
    font-style: normal;
    text-align: center;
    margin-top: 1rem;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    margin-top: 2rem;
  `}
`;

export const Link = styled(RouterLink)`
  ${({ theme }) => css`
    width: 100%;
    font-weight: ${theme.font.regular};
    font-style: normal;
    font-size: ${theme.font.sizes.medium};
    margin-top: 1rem;
    color: ${theme.colors.black};
  `}
`;

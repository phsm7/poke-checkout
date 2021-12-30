import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    ${theme.media.queryDesktop('1100')} {
      height: 100%;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 104.4px;
    height: 110.2px;
    ${theme.media.queryDesktop('1100')} {
      width: 173px;
      height: 174px;
    }
  `}
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
    ${theme.media.queryDesktop('1100')} {
      margin-top: 4rem;
    }
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

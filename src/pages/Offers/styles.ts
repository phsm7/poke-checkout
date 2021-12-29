import styled, { css } from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  height: auto;
  width: 100%;
`;

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
export const TitleOffers = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin: 2rem 0;
  `}
`;
export const SliderWrapper = styled.div`
  ${({ theme }) => css`
    padding-left: 2rem;
    height: 92.8vh;

    .slick-dots {
      transform: translateY(2rem);
      justify-content: space-between;
      width: 100%;
    }
    .slick-dots li button:before {
      width: 12px;
      height: 12px;
      color: #ffffff;
      background: #ffffff;
      border-radius: 60px;
      border: none;
      padding: 0;
    }
    .slick-dots li.slick-active button:before {
      width: 12px;
      height: 12px;
      color: ${theme.colors.yellow};
      background: ${theme.colors.yellow};
      border: 2px solid #000;
      border-radius: 60px;
      padding: 0;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.grayLightx};
    width: 100%;
    padding: 25.5px 24px;

    ${Title} {
      font-family: 'Roboto';
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      -webkit-text-stroke-width: 0;
    }
    ${Text} {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      font-style: normal;
      text-align: left;
    }
  `}
`;

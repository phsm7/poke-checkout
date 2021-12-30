import styled, { css } from 'styled-components';

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    height: 100vh;
    width: 100%;
    ${theme.media.queryDesktop('700')} {
      padding-top: 4rem;
    }
  `}
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
    ${theme.media.queryDesktop('700')} {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
export const SliderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 92.8vh;
    ${theme.media.queryDesktop('700')} {
      justify-content: space-around;
      align-content: center;
      width: 100%;
      height: auto;
      min-height: 77vh;
      margin: 0 auto;
    }

    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-dots {
      transform: translateY(-5rem);
      justify-content: space-between;
      width: 100%;
      ${theme.media.queryDesktop('1100')} {
        transform: translateY(4rem);
      }
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
    height: 100%;

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
      max-width: 70.5rem;
      margin: 0 auto;
    }

    ${theme.media.queryDesktop('500')} {
      padding-top: 5rem;
      padding-bottom: 9rem;

      ${Title} {
        font-size: 22px;
        margin: 0 auto 4.5rem;
      }
    }
  `}
`;

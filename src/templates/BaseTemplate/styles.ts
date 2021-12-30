import styled, { css, DefaultTheme } from 'styled-components';

type WithBackgroundProps = {
  image?: string;
  useBackground: boolean;
};

const wrapperModifiers = {
  white: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    padding: 0;
  `,
  withBackground: (theme: DefaultTheme, image: string) => css`
    background: url(${image}) no-repeat;
    background-size: cover;
    background-position-x: right;

    ${theme.media.queryDesktop('700')} {
      background-position-x: center;
    }
  `,
};

export const Wrapper = styled.div<WithBackgroundProps>`
  ${({ theme, useBackground, image = '' }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    height: 100%;
    width: 100%;

    ${useBackground && wrapperModifiers['withBackground'](theme, image)};
    ${!useBackground && wrapperModifiers['white'](theme)};
  `}
`;

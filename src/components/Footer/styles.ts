import styled, { css, DefaultTheme } from 'styled-components';
import { FooterProps } from '.';

const textModifiers = {
  gray: (theme: DefaultTheme) => css`
    color: ${theme.colors.footerText};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
};

export const Wrapper = styled.footer<FooterProps>`
  ${({ backgroundColor }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 8vh;
    bottom: 0;
    padding-bottom: 2rem;
    background-color: ${backgroundColor ? backgroundColor : 'transparent'};
  `}
`;

export const Text = styled.p<FooterProps>`
  ${({ textColor, theme }) => css`
    font-style: normal;
    font-weight: ${theme.font.regular};
    font-size: 1.4rem;
    text-align: center;
    width: 100%;

    ${!!textColor && textModifiers[textColor](theme)};
  `}
`;

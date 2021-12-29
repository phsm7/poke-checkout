import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

const buttonModifiers = {
  normal: () => css`
    width: 245px;
    height: 52px;
  `,
  large: () => css`
    width: 300px;
    height: 4rem;
  `,
  yellow: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.black};

    -moz-box-shadow: inset 0 -16px 10px #f99000;
    -webkit-box-shadow: inset 0 -16px 10px #f99000;
    box-shadow: inset 0 -16px 10px #f99000;
  `,
  blue: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.black};

    -moz-box-shadow: inset 0 -16px 10px #3662ce;
    -webkit-box-shadow: inset 0 -16px 10px #3662ce;
    box-shadow: inset 0 -16px 10px #3662ce;
  `,
  gray: (theme: DefaultTheme) => css`
    background: #dfdfdf;
    cursor: not-allowed;
    border: none;
    color: #9d9d9d;
    pointer-events: 'none';
    -moz-box-shadow: inset 0 -0 0 #dfdfdf;
    -webkit-box-shadow: inset 0 0 0 #dfdfdf;
    box-shadow: inset 0 0 0 #dfdfdf; ;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size, color, margin, withBorder }) => css`
    width: 15.4rem;
    height: 4rem;

    margin: ${margin};

    border-radius: 25px;

    border: ${!withBorder ? 'none' : `2px solid ${theme.colors.black}`};
    color: ${theme.colors.white};

    font-weight: ${theme.font.bold};
    font-style: bold;
    font-size: ${theme.font.sizes.medium};

    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    ${!!size && buttonModifiers[size]()};
    ${!!color && buttonModifiers[color](theme)};
  `}
`;

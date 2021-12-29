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
  withBackground: (image: string) => css`
    background: url(${image}) no-repeat;
    background-size: cover;
    background-position-x: right;
  `,
};

export const Wrapper = styled.div<WithBackgroundProps>`
  ${({ theme, useBackground, image = '' }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 9;

    height: 100%;
    width: 100%;

    ${useBackground && wrapperModifiers['withBackground'](image)};
    ${!useBackground && wrapperModifiers['white'](theme)};
  `}
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  z-index: 999;
`;

import styled, { css, DefaultTheme } from 'styled-components';

type CircleProps = {
  isActive: boolean;
};

const circleModifiers = {
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow};
    width: 3.2rem;
    height: 3.2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    border: 2px solid ${theme.colors.black};
  `,
};

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10rem;

    li::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -1.4rem;
      width: 1.6rem;
      height: 0.2rem;
      background: ${theme.colors.grayLightxx};
      z-index: -1;
    }

    li:last-child:before {
      top: 50%;
    }

    li:first-child::before {
      display: none;
    }
  `}
`;

export const Circle = styled.li<CircleProps>`
  ${({ isActive, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 6rem;
    width: 2.4rem;
    height: 2.4rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    background-color: ${theme.colors.grayLightxx};
    ${!!isActive && circleModifiers['active'](theme)};
  `}
`;

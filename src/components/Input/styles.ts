import styled, { css, DefaultTheme } from 'styled-components';
import { InputProps } from '.';

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    border-bottom: 2px solid ${theme.colors.red};
  `,
};

const sizeModifiers = {
  medium: (theme: DefaultTheme) =>
    css`
      width: 25rem;
      background: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
      border: none;
      border-radius: 8px;
      padding-left: 2rem;

      ::placeholder {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.black};
      }
    `,
  large: () =>
    css`
      width: 31.2rem;
    `,
};

export const Container = styled.div`
  padding-top: 1.2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    left: 1.6rem;
    bottom: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.sizes.medium};
    color: ${theme.colors.black};

    span {
      background: #fff;
      padding: 0 4px;
    }

    .content__name {
      position: absolute;
      bottom: 0.5rem;
      transition: all 0.3s ease-in-out;
      /* text-transform: uppercase; */
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      bottom: -1px;
      transform: translateY(-100%);
      transition: all 0.5s ease-in-out;
    }
  `}
`;
export const Input = styled.input<InputProps>`
  ${({ theme, width, errorMessage }) => css`
    border-radius: 8px 8px 0px 0px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #484848;
    height: 4.8rem;
    padding-left: 2rem;
    background: ${theme.colors.white};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    width: 100%;

    ${width == 'medium' && sizeModifiers.medium(theme)};
    ${!!errorMessage && wrapperModifiers.error(theme)};

    ::placeholder {
      color: transparent;
    }

    &:focus + ${Label} .content__name,
    &:not(:placeholder-shown) + ${Label} .content__name {
      transform: translateY(-150%);
      left: 0;
      font-size: 1.4rem;
    }

    &:focus + ${Label}::after, &:not(:placeholder-shown) + ${Label}::after {
      transform: translateX(0);
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.white}
        inset;
      filter: none;
      &::first-line {
        font-family: 'Roboto';
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const WrapperIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 3rem;
    right: 0;

    svg {
      color: ${theme.colors.grayDark};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};

    font-weight: ${theme.font.regular};

    margin-top: 0.4rem;
    margin-left: 1.6rem;
  `}
`;
export const InputWrapper = styled.div``;

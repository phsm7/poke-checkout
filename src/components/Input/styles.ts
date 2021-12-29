import styled, { css, DefaultTheme } from 'styled-components';
import { InputProps } from '.';

const wrapperModifiers = {
  warning: (theme: DefaultTheme) => css`
    border-bottom: 2px solid ${theme.colors.red};
  `,
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

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.regular};
    font-style: normal;
    font-size: ${theme.font.sizes.small};

    display: flex;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const Input = styled.input<InputProps>`
  ${({ theme, width, error }) => css`
    border-radius: 8px 8px 0px 0px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #484848;
    height: 4.8rem;
    padding-left: 2rem;
    background: ${theme.colors.white};

    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;

    ::placeholder {
      color: ${theme.colors.black};
    }
    ${width == 'medium' && sizeModifiers.medium(theme)};
    ${error && wrapperModifiers.error(theme)};
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
  `}
`;
export const Warning = styled.p`
  ${({ theme }) => css`
    color: #727272;
    font-size: 12px;

    font-weight: ${theme.font.regular};

    margin-top: 0.4rem;
  `}
`;

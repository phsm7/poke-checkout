import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${theme.media.queryDesktop('700')} {
      margin-left: 51px;
      padding-bottom: 15rem;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    grid-gap: 1.2rem;
    align-items: center;
    max-width: 31.2rem;

    button {
      margin-top: 2rem;
      margin-bottom: 2.8rem;
    }
  `}
`;

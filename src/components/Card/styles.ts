import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 43.42rem;
    width: 30.98rem;
    background-color: ${theme.colors.white};
    border-radius: 3rem;
  `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3.2rem;
`;

export const Image = styled.img`
  width: 215.5px;
  height: 246.5px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-style: normal;
    font-weight: ${theme.font.bold};
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1.7rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 3rem;
    font-style: normal;
    font-weight: ${theme.font.bold};
    text-align: center;
    position: relative;
    margin-bottom: 2rem;

    span {
      font-style: normal;
      font-weight: ${theme.font.bold};
      position: absolute;
      font-size: 1.4rem;
      top: 5px;
      left: -22px;
    }
  `}
`;

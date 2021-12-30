import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding-top: 3.4rem;
  margin-bottom: 3rem;
`;

export const Image = styled.img`
  width: 128px;
  height: 128px;
  margin: 0 auto 0.9rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #107510;
    text-align: center;
    width: 100%;
    margin: 0 auto 0.9rem;
    text-transform: uppercase;
    ${theme.media.queryDesktop('700')} {
      font-size: 42px;
    }
  `}
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  font-style: normal;
  width: 100%;
  color: #107510;
  margin: 0 auto 2.4rem;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #000000;
`;

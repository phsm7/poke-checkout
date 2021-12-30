import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 0;
    ${theme.media.queryDesktop('700')} {
      height: 100%;
      padding: 4.6rem 11.7rem 0;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    ${theme.media.queryDesktop('700')} {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  `}
`;

export const SuccessImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.medium};
    color: ${theme.colors.black};
    margin-bottom: 1.4rem;

    ${theme.media.queryDesktop('700')} {
      font-size: 28px;
      margin-bottom: 6.4rem;
    }
  `}
`;

export const CircleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    ${theme.media.queryDesktop('700')} {
      margin-bottom: 6.4rem;
    }
  `}
`;

export const OrderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 1.6rem;
    width: 31.2rem;
    height: 10.4rem;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    ${theme.media.queryDesktop('700')} {
      margin: 0;
      margin-top: 12px;
    }
  `}
`;

export const OrderTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #3662ce;
  border-bottom: 1px dashed #c4c4c4;
  padding-left: 1.6rem;
  height: 40px;
`;

export const PersonalDataWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.queryDesktop('700')} {
      margin-left: 51px;
      padding-bottom: 15rem;
    }
  `}
`;

export const OrderDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.4rem;
  width: 100%;
  padding: 2rem 1.6rem;
  text-transform: capitalize;

  p {
    font-size: 16px;
    font-weight: 400;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Form = styled.form`
  grid-gap: 1.2rem;
  align-items: center;
  max-width: 31.2rem;

  button {
    margin-top: 2rem;
    margin-bottom: 2.8rem;
  }
`;

export const SucessImage = styled.img`
  width: 100px;
  height: 93px;
  margin-bottom: 2.4rem;
`;

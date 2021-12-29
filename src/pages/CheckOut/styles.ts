import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 2rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const HeadingWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  svg {
    margin-right: 1.2rem;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.medium};
    color: ${theme.colors.black};
    margin-bottom: 1.4rem;
  `}
`;

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2.8rem;
  width: 31.2rem;
  height: 10.4rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #c4c4c4;
  border-radius: 8px;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.4rem;
  align-items: center;
`;

export const SucessImage = styled.img`
  width: 100px;
  height: 93px;
  margin-bottom: 2.4rem;
`;

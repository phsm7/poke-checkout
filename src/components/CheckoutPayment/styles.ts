import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: 3rem;
    ${theme.media.queryDesktop('700')} {
      margin-left: 51px;
    }
  `}
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

export const SelectDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 32px;

  h1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const SelectDayItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: auto;
`;
type SelectDayProps = {
  selected?: boolean;
};
export const SelectDayItem = styled.div<SelectDayProps>`
  ${({ selected }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background: ${selected ? '#FFD400' : '#fff'};
    border: ${selected
      ? `2px solid #000000`
      : `1px solid rgba(116, 116, 116, 0.5)`};
    border-radius: 8px;

    span {
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
    }

    :hover {
      cursor: pointer;
    }
  `}
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 31.2rem;
  height: 10rem;
  margin-bottom: 2.4rem;
`;
export const CepData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 26px;
    width: 20rem;
  }
  p {
    color: #747474;
    text-decoration-line: underline;
    :hover {
      cursor: pointer;
    }
  }
`;

export const AddressData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  span {
    font-size: 16px;
    width: 20rem;
  }
  p {
    color: #747474;
    text-decoration-line: underline;
    :hover {
      cursor: pointer;
    }
  }
`;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 31.2rem;
  margin-bottom: 1.4rem;
`;
type PaymentOptionProps = {
  selected: boolean;
};
export const PaymentOption = styled.div<PaymentOptionProps>`
  ${({ selected }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 151.49px;
    height: 72px;
    background: ${selected ? '#ffd400' : '#F8F8F8'};
    border: ${selected ? '3px solid #000000' : '1px solid #565656'};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 0.8rem;

    transition: all 0.4s;

    span {
      font-size: 14px;
      font-style: ${selected ? 'bold' : 'normal'};
      font-weight: ${selected ? '700' : '400'};
    }
    :hover {
      cursor: pointer;
    }
  `}
`;

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
    height: 100%;
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

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-decoration-line: underline;
    :hover {
      cursor: pointer;
      transform: scale(108%);
    }
  }
`;

export const HeadingLeftIcon = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(108%);
  }
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

export const PaymentWrapper = styled.div``;

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
  ${({ theme }) => css`
    grid-gap: 1.2rem;
    align-items: center;
    max-width: 31.2rem;

    button {
      margin-top: 2rem;
      margin-bottom: 2.8rem;
    }

    ${theme.media.queryDesktop('700')} {
      margin-left: 51px;
    }
  `}
`;

export const SucessImage = styled.img`
  width: 100px;
  height: 93px;
  margin-bottom: 2.4rem;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  `}
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

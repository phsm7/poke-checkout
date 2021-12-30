import styled from 'styled-components';

export const Wrapper = styled.div`
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

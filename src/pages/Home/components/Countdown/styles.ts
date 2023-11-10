import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background-color: ${(props) => props.theme['gray-700']};

    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  width: 6.4rem;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['green-500']};

  padding: 3.2rem 0;

  overflow: hidden;
`;

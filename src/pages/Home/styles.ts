import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-weight: 700;
  font-size: 1.8rem;
  color: ${(props) => props.theme['gray-100']};
`;

const BaseInput = styled.input`
  height: 4rem;

  background-color: transparent;

  font-weight: 700;
  font-size: 1.8rem;
  color: ${(props) => props.theme['gray-100']};

  padding: 0 0.8rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 7.2rem;
`;

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

export const StartCountdownButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: ${(props) => props.theme['green-500']};

  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};

  padding: 1.6rem;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

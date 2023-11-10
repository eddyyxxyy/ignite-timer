import styled from 'styled-components';

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

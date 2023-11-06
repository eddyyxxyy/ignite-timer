import styled from 'styled-components';

export const HistoryContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 5.6rem;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-100']};
  }
`;

export const HistoryList = styled.div`
  flex: 1;

  margin-top: 3.2rem;

  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};

      line-height: 1.6;
      text-align: left;
      font-size: 1.4rem;
      color: ${(props) => props.theme['gray-100']};

      padding: 1.6rem;

      &:first-child {
        padding-left: 2.4rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 2.4rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};

      line-height: 1.6;
      font-size: 1.4rem;

      padding: 1.6rem;
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`;

enum STATUS_COLORS {
  yellow = 'yellow-500',
  green = 'green-500',
  red = 'red-500',
}

interface IStatusProps {
  $statuscolor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<IStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    height: 0.8rem;
    width: 0.8rem;

    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.$statuscolor]]};

    border-radius: 50%;
  }
`;

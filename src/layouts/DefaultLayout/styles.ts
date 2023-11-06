import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: calc(100vh - 16rem);
  max-width: 120rem;

  background-color: ${(props) => props.theme['gray-800']};

  padding: 4rem;
  border-radius: 8px;
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
`;

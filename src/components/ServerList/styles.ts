import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-primary);
  padding: 12px 0px;
  max-height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  height: 3px;
  background-color: var(--gray);
  margin-bottom: 8px;
`;

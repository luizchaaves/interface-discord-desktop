import styled from 'styled-components';

import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  background-color: var(--gray-tertiary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;
  z-index: 2;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--gray-hover);
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 24px;
  height: 24px;
  color: var(--white);
  cursor: pointer;
`;

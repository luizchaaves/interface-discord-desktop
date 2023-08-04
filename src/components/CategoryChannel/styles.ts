import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 16px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-text);
  }

  &:hover {
    span {
      transition: color 0.2s;
      color: var(--white);
    }

    > div > svg {
      color: var(--white);
    }
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--gray-text);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 12px;
  height: 12px;
  color: var(--gray-text);
  margin-right: 2px;
  cursor: pointer;
`;

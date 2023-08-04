import styled from 'styled-components';

import { Check } from 'styled-icons/fa-solid';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0px 16px;
  background-color: var(--gray-tertiary);
  max-height: calc(100vh - 46px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-scroll);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-text);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--gray-hover);

    > strong {
      transition: 0.2s;
      color: var(--white);
    }
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--gray-text);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 8px;
    background-color: var(--blue);
    color: white;
    border-radius: 4px;
    padding: 3px 4px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;

interface PropsStyled {
  isonline?: number;
}

export const Avatar = styled.div<PropsStyled>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--gray-light);
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    bottom: -3px;
    right: -2px;
    background-color: ${(props) =>
      props.isonline ? 'var(--green)' : 'var(--red)'};
    border: 3px solid var(--gray-secondary);
  }

  &.bot {
    background: var(--blue);
  }
`;

export const CheckIcon = styled(Check)`
  width: 10px;
  height: 10px;
  color: var(--white);
  margin-right: 2px;
  cursor: pointer;
`;

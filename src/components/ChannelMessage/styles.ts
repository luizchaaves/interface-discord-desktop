import styled from 'styled-components';
import { Check } from 'styled-icons/fa-solid';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--black-hover);
  }

  &.mention {
    background-color: var(--yellow-secondary);
    border-left: 2px solid var(--yellow-primary);
    padding-left: 14px;

    &:hover {
      background-color: var(--yellow-secondary);
    }
  }

  > div {
    gap: 13px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: var(--gray-light);
  border-radius: 50%;
  cursor: pointer;

  &.bot {
    background-color: var(--blue);
  }
`;

export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 16px;
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

  > time {
    margin-left: 6px;
    color: var(--gray-text);
    font-size: 13px;
  }
`;

export const CheckIcon = styled(Check)`
  width: 10px;
  height: 10px;
  color: var(--white);
  margin-right: 2px;
  cursor: pointer;
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);
`;

export const Mention = styled.span`
  padding: 2px;
  background: var(--blue-mention);
  color: var(--blue-text-mention);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    text-decoration: underline;
    background-color: var(--blue);
    color: var(--white);
  }
`;

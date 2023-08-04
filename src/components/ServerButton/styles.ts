import styled, { keyframes } from 'styled-components';
import { DiscordAlt } from 'styled-icons/boxicons-logos';

interface StyledProps {
  selected?: boolean;
  ishome?: number;
  hasnotifications?: number;
  mentions?: number;
}

const Animation = keyframes`
  from{
    width: 0px;
    height: 0px;
  }
  to{
    width: 9px;
    height: 20px;
  }
`;

export const Button = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: var(--gray);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: border-radius 0.2s, background-color 0.2s;

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasnotifications ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--red);
    width: auto;
    height: 16px;
    padding: 0px 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--gray-tertiary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  &:hover,
  &.active {
    border-radius: 16px;
    background-color: ${(props) =>
      props.ishome ? 'var(--blue)' : 'var(--gray)'};

    &::before {
      animation: ${Animation} 0.2s forwards;
      position: absolute;
      left: -17px;
      top: calc(50% - 10px);
      background-color: var(--white);
      border-radius: 10px;
      content: '';
      display: inline;
    }
  }
`;

export const DiscordIcon = styled(DiscordAlt)`
  width: 32px;
  height: 32px;
  color: var(--white);
`;

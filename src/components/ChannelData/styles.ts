import styled from 'styled-components';
import { PlusCircleFill } from 'styled-icons/bootstrap';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--gray-secondary);
  padding: 4px;
`;

export const Wrapper = styled.div`
  padding-bottom: 20px;
  max-height: calc(100vh - 46px 68px - 8px);
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-scroll);
    border-radius: 4x;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--gray-tertiary);
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
  gap: 13px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0px 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 10px 0px 57px;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--gray-input-chat);
  position: relative;

  &::placeholder {
    color: var(--gray-text);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(PlusCircleFill)`
  width: 24px;
  height: 24px;
  color: var(--gray-text);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

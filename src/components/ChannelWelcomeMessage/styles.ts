import styled from 'styled-components';
import { Hash } from 'styled-icons/boxicons-regular';
import { Pencil } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px 0px;
  margin-right: 4px;
  background-color: transparent;
`;

export const Icon = styled.div`
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const HashtagIcon = styled(Hash)`
  width: 44px;
  height: 44px;
  color: var(--white);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: var(--white);
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--gray-text);
`;

export const EditLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  margin-top: -8px;
  padding: 8px;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  > p {
    font-size: 16px;
    color: var(--blue-link);
    margin-left: 8px;
  }

  &:hover {
    /* background: var(--gray-hover); */
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const PencilIcon = styled(Pencil)`
  width: 16px;
  height: 16px;
  color: var(--blue-link);
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: 8px;
`;

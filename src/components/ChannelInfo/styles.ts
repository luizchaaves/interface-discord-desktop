import styled from 'styled-components';

import { Hash } from 'styled-icons/boxicons-regular';
import { BellOff, QuestionMarkCircle } from 'styled-icons/evaicons-solid';
import { PushPin, PeopleAlt, Inbox } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0px 16px;
  background-color: var(--gray-secondary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;
  z-index: 2;

  > div {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  > div:last-child {
    gap: 16px;
  }
`;

export const HashtagIcon = styled(Hash)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
  margin-left: 8px;
`;

export const HashIcon = styled(Hash)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const BellIcon = styled(BellOff)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const PinIcon = styled(PushPin)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transform: rotate(45deg);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const PeopleIcon = styled(PeopleAlt)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const InboxIcon = styled(Inbox)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const QuestionIcon = styled(QuestionMarkCircle)`
  width: 24px;
  height: 24px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const InputSearch = styled.input`
  width: 180px;
  padding: 4px;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--gray-primary);
  position: relative;

  &::placeholder {
    color: var(--gray-light);
  }
`;

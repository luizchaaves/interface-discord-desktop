import styled from 'styled-components';

import { Hash } from 'styled-icons/boxicons-regular';
import { VolumeFull } from 'styled-icons/boxicons-solid';
import { ChatLeftFill } from 'styled-icons/bootstrap';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4px;

    > span {
      font-size: 15px;
      color: var(--gray-text);
    }
  }

  > div + div > svg {
    display: none;
  }

  &:hover,
  &.active {
    background-color: var(--gray-hover);

    > div span {
      color: var(--white);
    }

    > div + div > svg {
      display: block;
    }
  }
`;

export const HashtagIcon = styled(Hash)`
  width: 20px;
  height: 20px;
  color: var(--gray-light);
`;
export const VolumeIcon = styled(VolumeFull)`
  width: 20px;
  height: 20px;
  color: var(--gray-light);
`;

export const MessageIcon = styled(ChatLeftFill)`
  width: 12px;
  height: 12px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--gray-primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray-light);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
  }

  > span {
    font-size: 13px;
    color: var(--gray-text);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--gray-light);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

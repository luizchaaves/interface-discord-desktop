import React from 'react';

import { Container, Role, User, Avatar, CheckIcon } from './styles';
import CustomStyleSheetManager from '../CustomStyleSheetManager';

interface Props {
  nickname: string;
  isBot?: boolean;
  isonline?: number;
}

const UserRow: React.FC<Props> = ({ nickname, isBot, isonline }) => {
  return (
    <CustomStyleSheetManager>
      <User>
        <Avatar className={isBot ? 'bot' : ''} isonline={isonline} />
        <strong>{nickname}</strong>

        {isBot && (
          <span>
            <CheckIcon />
            Bot
          </span>
        )}
      </User>
    </CustomStyleSheetManager>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 3</Role>
      <UserRow nickname="luiz_chaaves" isonline={1} />
      <UserRow nickname="wumpus" isonline={1} />
      <UserRow nickname="phibi" isBot isonline={1} />

      <Role>Offline - 2</Role>
      <UserRow nickname="chad" />
      <UserRow nickname="mallow" />
    </Container>
  );
};

export default UserList;

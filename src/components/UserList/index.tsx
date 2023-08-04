import React from 'react';

import { Container, Role, User, Avatar, CheckIcon } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && (
        <span>
          <CheckIcon />
          Bot
        </span>
      )}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="luiz_chaaves" />
      <UserRow nickname="wumpus" />

      <Role>Offline - 3</Role>
      <UserRow nickname="phibi" isBot />
      <UserRow nickname="chad" />
      <UserRow nickname="mallow" />
    </Container>
  );
};

export default UserList;

import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton name="home" ishome={1} />
      <Separator />
      <ServerButton name="server-1" />
      <ServerButton name="server-2" hasnotifications={1} />
      <ServerButton name="server-3" mentions={3} />
      <ServerButton name="server-4" />
    </Container>
  );
};

export default ServerList;

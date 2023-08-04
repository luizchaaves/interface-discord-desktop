import React from 'react';

import {
  Container,
  Icon,
  HashtagIcon,
  Title,
  Description,
  EditLink,
  PencilIcon,
  Separator,
} from './styles';

const ChannelWelcomeMessage: React.FC = () => {
  return (
    <Container>
      <Icon>
        <HashtagIcon />
      </Icon>

      <Title>Bem-vindo(a) a #to-work</Title>
      <Description>Este é o começo do canal #to-work</Description>

      <EditLink>
        <PencilIcon />
        <p>Editar canal</p>
      </EditLink>

      <Separator />
    </Container>
  );
};

export default ChannelWelcomeMessage;

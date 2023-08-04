import React from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  HashIcon,
  BellIcon,
  PinIcon,
  PeopleIcon,
  InputSearch,
  InboxIcon,
  QuestionIcon,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <Title>to-work</Title>
      </div>

      <div>
        <HashIcon />
        <BellIcon />
        <PinIcon />
        <PeopleIcon />
        <div>
          <InputSearch type="text" placeholder="Buscar" />
        </div>
        <InboxIcon />
        <QuestionIcon />
      </div>
    </Container>
  );
};

export default ChannelInfo;

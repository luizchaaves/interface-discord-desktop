import React from 'react';

import {
  Container,
  HashtagIcon,
  VolumeIcon,
  MessageIcon,
  InviteIcon,
  SettingsIcon,
} from './styles';

interface Props {
  name: string;
  isTextChannel?: boolean;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ name, isTextChannel, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        {isTextChannel ? <HashtagIcon /> : <VolumeIcon />}
        <span>{name}</span>
      </div>

      <div>
        {!isTextChannel && <MessageIcon />}
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;

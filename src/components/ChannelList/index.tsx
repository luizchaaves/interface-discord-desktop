import React from 'react';
import { Container } from './styles';
import CategoryChannel from '../CategoryChannel';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <CategoryChannel name="WORK" />
      <ChannelButton isTextChannel selected name="to-work" />
      <ChannelButton name="to-work" />
      <CategoryChannel name="PLAY" />
      <ChannelButton isTextChannel name="to-play" />
      <ChannelButton name="to-play" />
    </Container>
  );
};

export default ChannelList;

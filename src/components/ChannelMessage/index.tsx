import React from 'react';

import {
  Container,
  Avatar,
  Message,
  Header,
  Content,
  CheckIcon,
} from './styles';

export { Mention } from './styles';

interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && (
            <span>
              <CheckIcon />
              Bot
            </span>
          )}
          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;

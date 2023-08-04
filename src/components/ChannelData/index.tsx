import React, { useRef, useEffect } from 'react';

import {
  Container,
  Wrapper,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';
import ChannelWelcomeMessage from '../ChannelWelcomeMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, []);

  return (
    <Container>
      <Wrapper ref={messageRef}>
        <Messages>
          <ChannelWelcomeMessage />

          <ChannelMessage
            author="luiz_chaaves"
            content="Olá pessoal, tudo bem?"
            date="31/07/2023"
          />
          <ChannelMessage
            author="phibi"
            content="Seja bem vindo ao servidor #to-work"
            date="31/07/2023"
            isBot
          />
          <ChannelMessage
            author="chad"
            content={
              <>
                Olá <Mention>@luiz_chaaves</Mention>
              </>
            }
            date="31/07/2023"
            hasMention
          />
          <ChannelMessage author="wumpus" content="Olá" date="31/07/2023" />
        </Messages>
      </Wrapper>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #to-work" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;

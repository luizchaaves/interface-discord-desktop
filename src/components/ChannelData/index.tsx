import React, { useRef, useEffect } from 'react';

import {
  Container,
  Wrapper,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, []);

  return (
    <Container>
      <Wrapper ref={messageRef}>
        <Messages></Messages>
      </Wrapper>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #to-work" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;

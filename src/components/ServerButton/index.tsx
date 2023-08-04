import React from 'react';

import { Button, DiscordIcon } from './styles';
import CustomStyleSheetManager from '../CustomStyleSheetManager';

interface Props {
  name: string;
  selected?: boolean;
  ishome?: number;
  hasnotifications?: number;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  name,
  selected,
  ishome,
  hasnotifications,
  mentions,
}) => {
  return (
    <CustomStyleSheetManager>
      <Button
        aria-label={name}
        selected={selected}
        ishome={ishome}
        hasnotifications={hasnotifications}
        mentions={mentions}
      >
        {ishome && <DiscordIcon />}
      </Button>
    </CustomStyleSheetManager>
  );
};

export default ServerButton;

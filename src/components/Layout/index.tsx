import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import ChannelInfo from '../ChannelInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <UserInfo />
      <ChannelInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;

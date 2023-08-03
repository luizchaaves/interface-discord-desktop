import styled from 'styled-components';

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 56px;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
`;

// SL - server list
// SN - server name
// CI - channel info
// CL - channel list
// CD - channel data
// UL - user list
// UI - user info

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';

export const HeaderWrapper = styled(MuiBox)`
  z-index: 200;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  background-color: #fff;
`;

export const HeaderContainer = styled(MuiContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)``;

import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const SidebarLinksContainer = styled(MuiBox)`
  margin-bottom: 14px;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  padding-bottom: 14px;
`;

// Link
export const SidebarLinkContainer = styled(NavLink)`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  fill: #161823;
  color: #161823;
  text-decoration: none;

  &.active {
    color: #ff4040;
    fill: #ff4040;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SidebarLinkText = styled(MuiTypography)`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 700;
`;

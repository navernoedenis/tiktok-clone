import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

export const UserPanelContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const LinkIcon = styled(Link)`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

export const Dropdown = styled(MuiBox)`
  position: relative;
  margin-left: 20px;
`;

export const DropdownAvatar = styled(MuiAvatar)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const DropdownAvatarSkeleton = styled(MuiSkeleton)`
  width: 40px;
  height: 40px;
`;

export const DropdownMenu = styled(MuiBox)`
  position: absolute;
  top: calc(100% + 6px);
  right: -10px;
  border-radius: 8px;
  min-width: 240px;
  box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  background-color: #fff;
`;

import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

export const SuggestedAccountsContainer = styled(MuiBox)``;

export const Title = styled(MuiTypography)`
  margin-bottom: 20px;
  font-weight: 600;
`;

export const SuggestedList = styled(MuiBox)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SuggestedAccountContainer = styled(NavLink)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const UserAvatar = styled(MuiAvatar)`
  border: 1px solid #ccc;
  height: 30px;
  width: 30px;
`;

export const UserAvatarSkeleton = styled(MuiSkeleton)`
  height: 30px;
  width: 30px;
`;

export const UserDetails = styled(MuiBox)`
  margin-left: 16px;
`;

export const UserNickname = styled(MuiTypography)`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.5px;
  color: #161823;
`;

export const UserDisplayname = styled(MuiTypography)`
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: #6e6e6e;
`;

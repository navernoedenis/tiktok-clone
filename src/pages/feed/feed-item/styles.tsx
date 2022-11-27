import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

export const FeedItemContainer = styled(MuiBox)`
  position: relative;
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  max-width: 580px;
  width: 100%;
`;

export const Avatar = styled(MuiAvatar)`
  height: 50px;
  width: 50px;
`;

export const AvatarSkeleton = styled(MuiSkeleton)`
  height: 50px;
  width: 50px;
`;

export const Content = styled(MuiBox)`
  margin-left: 10px;
`;

export const Header = styled(MuiBox)``;

export const UserBlock = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const Username = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #161823;
`;

export const Displayname = styled(MuiTypography)`
  margin-left: 5px;
  font-size: 14px;
  color: #838383;
  font-weight: 600;
`;

export const Caption = styled(MuiTypography)`
  font-size: 14px;
`;

export const Audioname = styled(MuiTypography)`
  font-size: 15px;
  font-weight: 700;
`;

export const ButtonContainer = styled(MuiBox)`
  position: absolute;
  top: 28px;
  right: 0;
`;

import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiStack from '@mui/material/Stack';
import MuiTypography from '@mui/material/Typography';

export const VideoPlayerHeaderContainer = styled(MuiBox)`
  padding: 20px;
`;

export const AuthorContainer = styled(MuiBox)`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Author = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(MuiAvatar)`
  height: 50px;
  width: 50px;
`;
export const AvatarSkeleton = styled(MuiSkeleton)`
  height: 50px;
  width: 50px;
`;

export const Credentials = styled(MuiBox)`
  margin-left: 14px;
`;

export const Username = styled(Link)`
  text-decoration: none;
  font-weight: 800;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`;

export const Displayname = styled(MuiTypography)`
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
`;

export const FollowButtonContainer = styled(MuiBox)`
  margin-left: 20px;
`;

export const Description = styled(MuiBox)`
  margin-bottom: 18px;
`;

export const Buttons = styled(MuiStack)``;

export const Caption = styled(MuiTypography)`
  margin-bottom: 5px;
  font-weight: 16px;
  font-weight: 600;
`;

export const Audioname = styled(MuiTypography)`
  font-size: 18px;
  font-weight: 700;
`;

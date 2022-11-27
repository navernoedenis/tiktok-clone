import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

export const ProfilePostContainer = styled(MuiBox)`
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
`;

export const Video = styled('video')`
  display: block;
  width: 100%;
  height: 100%;
  transition: 100ms linear;
  object-fit: cover;
`;

export const VideoMask = styled(MuiBox)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.075);
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
`;

export const LikesBlock = styled(MuiBox)`
  display: flex;
  color: #fff;
`;

export const LikesCount = styled(MuiTypography)`
  margin-left: 6px;
  font-size: 16px;
  font-weight: 600;
`;

export const VideoSkeleton = styled(MuiSkeleton)`
  height: 100%;
  width: 100%;
`;

import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';

export const VideoPlayerContainer = styled(MuiBox)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export const Video = styled('video')`
  height: 100%;
  width: 100%;
`;

export const VideoSkeleton = styled(MuiSkeleton)`
  display: block;
  height: 100%;
  max-width: 500px;
  width: 100%;
  transform: scale(1);
  background-color: rgba(255, 255, 255, 0.15);
`;

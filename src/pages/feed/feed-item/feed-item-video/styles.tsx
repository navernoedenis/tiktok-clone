import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiStack from '@mui/material/Stack';
import MuiSkeleton from '@mui/material/Skeleton';

export const FeedItemVideoContainer = styled(MuiBox)`
  display: flex;
  align-items: flex-end;
`;

export const VideoContainer = styled(MuiBox)`
  position: relative;
  max-height: 605px;
  max-width: 339px;
  height: 51.5vw;
  width: 30vw;
  overflow: hidden;
`;

export const Video = styled('video')`
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 100%;
  background: #000;
  object-fit: cover;
`;

export const VideoSkeleton = styled(MuiSkeleton)`
  height: 100%;
  width: 100%;
  transform: scale(1);
`;

export const Buttons = styled(MuiStack)`
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  // Button container
  div {
    flex-direction: column;
  }

  // Button counter
  p {
    margin-top: 10px;
    margin-left: 0;
  }
`;

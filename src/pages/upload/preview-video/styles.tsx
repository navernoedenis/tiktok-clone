import { styled } from '@mui/system';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';

export const PreviewVideoContainer = styled(MuiBox)`
  position: relative;
  height: 100%;
  width: 100%;
  color: #bbb;
`;

export const CloseButton = styled(MuiButton)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translate(-35%, -35%);
  border-radius: 50%;
  min-width: auto;
  padding: 8px;
  background-color: #fb5512;
  font-size: 20px;
  color: #fff;

  &:hover {
    background-color: orange;
  }
`;

export const CloseButtonIcon = styled(CloseRoundedIcon)``;

export const Video = styled('video')`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
`;

export const VideoSize = styled(MuiTypography)`
  text-align: center;
  font-size: 18px;
`;

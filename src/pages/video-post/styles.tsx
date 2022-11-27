import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';

export const VideoPostModalContainer = styled(MuiBox)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  display: flex;
`;

export const VideoPostContainer = styled(MuiContainer)`
  display: flex;
`;

export const Aside = styled(MuiBox)`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';

export const Backdrop = styled(MuiBox)`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
`;

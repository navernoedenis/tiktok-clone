import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';

export const ProfilePageContainer = styled(MuiContainer)`
  display: flex;
`;

export const ProfileInfo = styled(MuiBox)`
  margin-left: auto;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

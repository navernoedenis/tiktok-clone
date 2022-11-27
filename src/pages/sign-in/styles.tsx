import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import MuiTypography from '@mui/material/Typography';

export const SignInPageContainer = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled(MuiTypography)`
  margin-bottom: 16px;
  font-size: 32px;
  text-align: center;
  font-weight: 800;
`;

export const LoginCards = styled(MuiBox)`
  margin: 0 auto;
  max-width: 375px;
  width: 100%;
`;

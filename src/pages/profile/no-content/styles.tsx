import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

import PersonIcon from '@mui/icons-material/Person';

export const NoContentContainer = styled(MuiBox)`
  margin-top: 20px;
  text-align: center;
`;

export const Icon = styled(PersonIcon)`
  font-size: 130px;
  color: #d7d7d7;
`;

export const Title = styled(MuiTypography)`
  font-size: 24px;
  font-weight: 800;
`;

export const Text = styled(MuiTypography)`
  margin-top: 10px;
  font-size: 16px;
`;

import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiStack from '@mui/material/Stack';
import MuiTypography from '@mui/material/Typography';

export const ProfileStatisticContainer = styled(MuiStack)`
  margin-bottom: 20px;
`;

export const Item = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const Count = styled(MuiTypography)`
  font-size: 18px;
  font-weight: 700;
`;

export const Text = styled(MuiTypography)`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #858585;
`;

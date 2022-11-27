import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const DropdownMenuItemContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 14px;
`;

export const IconContainer = styled(MuiBox)`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(MuiTypography)`
  font-size: 16px;
  font-weight: 600;
`;

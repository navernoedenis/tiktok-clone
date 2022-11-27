import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const SearchResultContainer = styled(MuiBox)`
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  left: 0;
  box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

export const Subtitle = styled(MuiTypography)`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #525252;
`;

export const Hint = styled(MuiTypography)`
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: default;
`;

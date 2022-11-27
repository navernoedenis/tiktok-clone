import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const DiscardModalContainer = styled(MuiBox)`
  border-radius: 10px;
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  text-align: center;
`;

export const Header = styled(MuiBox)`
  padding: 20px;
`;

export const Title = styled(MuiTypography)`
  font-size: 19px;
  font-weight: 600;
`;

export const Subtitle = styled(MuiTypography)`
  margin-top: 3px;
  font-size: 15px;
  font-weight: 500;
  color: #a5a5a5;
`;

export const ConfirmButton = styled(MuiBox)`
  border-top: 1px solid #e5e5e5;
  font-size: 15px;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export const DiscardButton = styled(MuiBox)`
  border-top: 1px solid #e5e5e5;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #ff1e1e;
  cursor: pointer;
`;

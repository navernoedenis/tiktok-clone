import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const LoginCardContainer = styled(MuiBox)`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid #1618231f;
  padding: 0 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &.no-available {
    cursor: default;
    border-color: #fe2c55;
  }
`;

export const IconWrapper = styled(MuiBox)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 10px;
`;

export const Title = styled(MuiTypography)`
  text-align: center;
  font-size: 15px;
  line-height: 44px;
  font-weight: 600;
`;

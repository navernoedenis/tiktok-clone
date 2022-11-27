import { styled } from '@mui/system';

import MuiContainer from '@mui/material/Container';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';

export const SignUpPageContainer = styled(MuiContainer)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 20px;
`;

export const Title = styled(MuiTypography)`
  margin-bottom: 36px;
  font-size: 32px;
  font-weight: 800;
`;

export const Form = styled(MuiBox)`
  max-width: 375px;
  width: 100%;
`;

export const Field = styled(MuiBox)``;

export const Label = styled(MuiTypography)`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled('input')`
  outline: none;
  border: 1px solid #e4e4e6;
  border-radius: 3px;
  background-color: #f1f1f2;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
`;

export const Hint = styled(MuiTypography)`
  color: #02b102;
  margin-top: 5px;
  font-size: 14px;

  &.error {
    color: #ff7b68;
  }
`;

export const SignUpButton = styled(MuiButton)`
  margin-top: 14px;
  width: 100%;
  background-color: #fe2c56;

  &:hover {
    background-color: #d30000;
  }
`;

import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';

export const UploadFormContainer = styled(MuiBox)`
  width: 100%;
`;

export const Header = styled(MuiBox)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(MuiTypography)`
  font-size: 24px;
  font-weight: 700;
`;

export const Limit = styled(MuiTypography)`
  font-size: 14px;
  color: #999;
`;

export const Form = styled(MuiBox)``;

export const Input = styled('input')`
  outline: none;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  font-size: 16px;
  padding: 12px 10px;
  width: 100%;
  color: #999;
  cursor: pointer;
`;

export const Buttons = styled(MuiBox)`
  margin-top: 20px;
  text-align: right;
`;

export const DiscardButton = styled(MuiButton)`
  margin-right: 10px;
  border-radius: 0;
  font-size: 14px;
  background-color: transparent;
  color: #000;

  &:hover {
    background-color: inherit;
  }
`;

export const PostButton = styled(MuiButton)`
  border-radius: 0;
  font-size: 14px;
  background-color: #fb1d1d;
  min-width: 140px;
  color: #fff;

  &:hover {
    background-color: #f75f5f;
  }
`;

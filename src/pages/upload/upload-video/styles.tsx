import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const UploadVideoContainer = styled(MuiBox)`
  border-radius: 10px;
  border: 1px dashed transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  height: 100%;
  width: 100%;
  color: #bbb;
  background-color: #f7f7f7;
  font-size: 16px;
  cursor: pointer;
  transition: 100ms linear;

  &:hover {
    background-color: #efefef;
  }
`;

export const UploadIcon = styled(CloudUploadIcon)`
  font-size: 50px;
`;

export const Title = styled(MuiTypography)`
  margin-top: 14px;
  font-size: 20px;
`;

export const Text = styled(MuiTypography)`
  margin-top: 14px;
`;

export const Hint = styled(MuiTypography)`
  margin-top: 14px;
`;

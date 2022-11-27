import { styled } from '@mui/system';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const UploadProgressContainer = styled(MuiBox)`
  border-radius: 10px;
  border: 1px dashed transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  color: #000;
  overflow: hidden;
`;

export const CloseIcon = styled(CloseRoundedIcon)`
  cursor: pointer;
`;

export const Progress = styled(MuiTypography)`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const FileName = styled(MuiTypography)`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  word-break: break-all;
`;

export const FileSize = styled(MuiTypography)`
  margin-top: 10px;
  font-size: 14px;
  color: #bbb;
`;

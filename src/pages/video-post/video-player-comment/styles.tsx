import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export const VideoPlayerCommentContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(MuiAvatar)`
  height: 45px;
  width: 45px;
`;

export const Credentials = styled(MuiBox)`
  margin-left: 10px;
`;

export const Username = styled(Link)`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;

export const Message = styled(MuiTypography)`
  font-size: 16px;
`;

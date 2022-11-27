import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import MuiTypography from '@mui/material/Typography';

export const SearchResultContainer = styled(Link)`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 100ms linear;
  color: #000;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const Avatar = styled(MuiAvatar)`
  margin-right: 14px;
`;

export const Description = styled(MuiBox)`
  line-height: 1.1;
`;

export const Username = styled(MuiTypography)`
  font-size: 14px;
  font-weight: 600;
`;

export const DisplayName = styled(MuiTypography)`
  font-size: 13px;
`;

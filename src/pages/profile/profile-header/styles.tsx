import { styled } from '@mui/system';

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTypography from '@mui/material/Typography';

export const ProfileHeaderContainer = styled(MuiBox)`
  margin-bottom: 25px;
  display: flex;
`;

export const Avatar = styled(MuiAvatar)`
  border: 1px solid #f1f1f1;
  height: 120px;
  width: 120px;
`;

export const AvatarSkeleton = styled(MuiSkeleton)`
  height: 120px;
  width: 120px;
`;

export const Description = styled(MuiBox)`
  margin-left: 24px;

  button {
    margin-top: 10px;
    min-width: 170px;
    padding: 8px 10px;
  }
`;

export const Username = styled(MuiTypography)`
  margin-bottom: 5px;
  font-size: 34px;
  line-height: 1;
  font-weight: 800;
`;

export const Displayname = styled(MuiTypography)`
  font-size: 20px;
  font-weight: 700;
`;

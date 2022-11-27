import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import MuiTypography from '@mui/material/Typography';

export const UploadPageContainer = styled(MuiContainer)``;

export const Header = styled(MuiBox)`
  margin-bottom: 20px;
`;

export const Title = styled(MuiTypography)`
  font-size: 60px;
  line-height: 1.2;
  font-weight: 800;
`;

export const Subtitle = styled(MuiTypography)`
  font-size: 18px;
  font-weight: 500;
  color: #9b9b9b;
`;

export const Content = styled(MuiBox)`
  display: flex;
`;

export const Aside = styled(MuiBox)`
  margin-right: 100px;
  flex-shrink: 0;
  max-width: 310px;
  height: 540px;
  width: 100%;
`;

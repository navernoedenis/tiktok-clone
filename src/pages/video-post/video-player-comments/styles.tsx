import { styled } from '@mui/system';
import MuiStack from '@mui/material/Stack';

export const VideoPlayerCommentsContainer = styled(MuiStack)`
  overflow-y: auto;
  flex-grow: 1;
  border-top: 2px solid #ededed;
  border-bottom: 2px solid #ededed;
  padding: 20px;
  background-color: #f7f7f7;
  scroll-behavior: smooth;
`;

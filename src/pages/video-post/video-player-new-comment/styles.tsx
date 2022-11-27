import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';

export const VideoPlayerCommentContainer = styled(MuiBox)`
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const CommentField = styled('input')`
  outline: none;
  border: 2px solid #ededed;
  border-radius: 3px;
  flex-grow: 1;
  padding: 10px;
  cursor: pointer;
`;

export const PostButton = styled('button')`
  outline: none;
  margin-left: 5px;
  border: none;
  flex-shrink: 0;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
`;

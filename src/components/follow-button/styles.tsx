import { styled } from '@mui/system';

export const FollowButtonContainer = styled('button')`
  border: 2px solid #ff65a5;
  border-radius: 5px;
  min-width: 100px;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  color: #ff65a5;
  cursor: pointer;
  transition: 100ms linear;

  &:hover {
    opacity: 0.65;
  }
`;

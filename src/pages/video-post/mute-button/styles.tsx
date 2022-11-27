import { styled } from '@mui/system';

export const MuteContainer = styled('button')`
  position: absolute;
  right: 18px;
  bottom: 18px;
  padding: 0;
  border: none;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2e2e;
  cursor: pointer;

  svg {
    color: #fff;
  }
`;

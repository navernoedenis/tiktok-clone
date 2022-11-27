import { styled } from '@mui/system';

export const ShareButtonContainer = styled('button')`
  border-radius: 50%;
  background-color: #f1f1f1;
  height: 50px;
  width: 50px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: 100ms linear;

  svg {
    margin-right: -5px;
    font-size: 24px;
  }
`;

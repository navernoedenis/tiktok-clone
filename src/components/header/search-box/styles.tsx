import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';

export const SearchBoxContainer = styled(MuiBox)`
  position: relative;
`;

export const Form = styled(MuiBox)`
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  display: flex;
  align-items: center;
  width: 360px;
  background-color: #1618230f;
  padding: 10px 48px 10px 15px;
`;

export const SearchInput = styled('input')`
  outline: none;
  border: none;
  font-size: 14px;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
`;

export const IconContainer = styled(MuiBox)`
  cursor: pointer;
  border-right: 1px solid #1618231f;
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 6px;
`;

export const SearchButton = styled('button')`
  position: absolute;
  border: none;
  background-color: transparent;
  padding: 8px;
  padding-right: 16px;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: 100ms linear;

  &:hover {
    background-color: #dddddd;
  }
`;

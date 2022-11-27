import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';

export const ProfileTabsContainer = styled(MuiBox)``;

export const Tabs = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Tab = styled(MuiBox)`
  padding: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #ccc;
  width: 100%;
  cursor: pointer;
  transition: 100ms linear;

  &.active {
    color: #000;
  }
`;

export const ActiveTabBar = styled(MuiBox)`
  margin-top: -2px;
  height: 2px;
  background-color: #000;
  transition: 200ms linear;
`;

export const ActiveTabContent = styled(MuiBox)`
  padding-top: 2px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 320px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

import { styled } from '@mui/system';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiSkeleton from '@mui/material/Skeleton';

export const LikeButtonContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
`;

export const Button = styled('button')`
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
  transition: 100ms linear;

  svg {
    font-size: 24px;
  }

  &.liked {
    background-color: #fdf3ff;

    svg {
      color: #e995bf;
    }
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const ButtonSkeleton = styled(MuiSkeleton)`
  height: 50px;
  width: 50px;
`;

export const LikesCount = styled(MuiTypography)`
  margin-left: 10px;
  min-width: 20px;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
`;

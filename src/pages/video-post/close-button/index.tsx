import React from 'react';
import CloseIcon from '@mui/icons-material/CloseRounded';
import { CloseButtonContainer } from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

function CloseButton({ onClick }: CloseButtonProps): JSX.Element {
  return (
    <CloseButtonContainer onClick={onClick}>
      <CloseIcon />
    </CloseButtonContainer>
  );
}

export default CloseButton;

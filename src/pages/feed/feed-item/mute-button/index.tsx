import React from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOffRounded';

import { MuteButtonContainer } from './styles';

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
}

function MuteButton({ isMuted, onToggle }: MuteButtonProps): JSX.Element {
  return (
    <MuteButtonContainer onClick={onToggle}>
      {isMuted ? <VolumeUpIcon /> : <VolumeOffIcon />}
    </MuteButtonContainer>
  );
}

export default MuteButton;

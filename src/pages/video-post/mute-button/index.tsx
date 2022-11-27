import React from 'react';
import VolumeOnIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOffRounded';
import { MuteContainer } from './styles';

interface MuteButtonProps {
  isMuted: boolean;
  onClick: () => void;
}

function MuteButton({ isMuted, onClick }: MuteButtonProps): JSX.Element {
  return (
    <MuteContainer onClick={onClick}>
      {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
    </MuteContainer>
  );
}

export default MuteButton;

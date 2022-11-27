import React from 'react';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import PauseIcon from '@mui/icons-material/PauseRounded';

import { PlayButtonContainer } from './styles';

interface PlayButtonProps {
  onToggle: () => void;
  isPlaying: boolean;
}

function PlayButton({ onToggle, isPlaying }: PlayButtonProps): JSX.Element {
  return (
    <PlayButtonContainer onClick={onToggle}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </PlayButtonContainer>
  );
}

export default PlayButton;

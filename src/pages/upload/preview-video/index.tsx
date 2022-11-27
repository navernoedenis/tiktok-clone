import React from 'react';
import { useDiscardModal } from 'context/discard-modal';
import {
  CloseButton,
  CloseButtonIcon,
  PreviewVideoContainer,
  Video,
  VideoSize,
} from './styles';

interface PreviewVideoProps {
  file: File;
  videoUrl: string;
}

function PreviewVideo({ file, videoUrl }: PreviewVideoProps): JSX.Element {
  const { onOpenDiscard } = useDiscardModal();

  return (
    <PreviewVideoContainer>
      <CloseButton onClick={onOpenDiscard}>
        <CloseButtonIcon />
      </CloseButton>
      <Video src={videoUrl} loop muted autoPlay />
      <VideoSize>{(file.size / 1000000).toFixed(1)} MB</VideoSize>
    </PreviewVideoContainer>
  );
}

export default PreviewVideo;

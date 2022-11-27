import React from 'react';
import toast from 'react-hot-toast';

import { useDragDrop } from 'hooks/useDragDrop';
import { UploadIcon, Hint, Text, Title, UploadVideoContainer } from './styles';

interface UploadVideoProps {
  onDrop: (file: File) => void;
}

function UploadVideo({ onDrop }: UploadVideoProps): JSX.Element {
  const checkVideoDuration = (file: File): void => {
    const isVideo = file.type.split('/')[0] === 'video';
    if (!isVideo) {
      toast.error('Only video files are supports');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const audio = new Audio(reader.result as string);
      audio.onloadedmetadata = () => {
        const duration = Math.round(audio.duration);
        const MAX_VIDEO_DURATION = 180;

        if (duration > MAX_VIDEO_DURATION) {
          toast.error('Video is over than 3 minutes');
        } else {
          onDrop(file);
        }
      };
    };
  };

  const { dropRef, inputRef, selectFile, onSelectFile } =
    useDragDrop(checkVideoDuration);

  return (
    <UploadVideoContainer ref={dropRef} onClick={selectFile}>
      <UploadIcon />
      <Title>Select video to upload</Title>
      <Text>Or drag and drop a file</Text>
      <Hint>
        MP4 or WebM <br /> 720x1280 resolution or higher UP to 180 seconds
      </Hint>
      <input
        accept="video/mp4, video/webm"
        onChange={onSelectFile}
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
      />
    </UploadVideoContainer>
  );
}

export default UploadVideo;

import React from 'react';
import {
  CloseIcon,
  FileName,
  FileSize,
  Progress,
  UploadProgressContainer,
} from './styles';

interface UploadProgressProps {
  cancelUploding: () => void;
  file: File;
  progress: number;
}

function UploadProgress({
  cancelUploding,
  file,
  progress,
}: UploadProgressProps): JSX.Element {
  return (
    <UploadProgressContainer>
      <CloseIcon onClick={cancelUploding} />
      <Progress>{progress}%</Progress>
      <FileName>{file.name}</FileName>
      <FileSize>{(file.size / 1000000).toFixed(1)} MB</FileSize>
    </UploadProgressContainer>
  );
}

export default UploadProgress;

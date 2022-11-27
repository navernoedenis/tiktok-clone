import React from 'react';

import { useAuth } from 'context/auth';
import { useFirebaseUpload } from 'hooks/useFirebaseUpload';
import { User } from 'types/user';

import PreviewVideo from './preview-video';
import UploadForm from './upload-form';
import UploadProgress from './upload-progress';
import UploadVideo from './upload-video';

import {
  Aside,
  Content,
  Header,
  Subtitle,
  Title,
  UploadPageContainer,
} from './styles';

function SignUpPage(): JSX.Element {
  const { user } = useAuth();

  const {
    file,
    handleCancelUploading,
    handleDiscard,
    handleUpload,
    isUploading,
    progress,
    videoUrl,
  } = useFirebaseUpload(user as User);

  const isVideoUploading = isUploading && file;
  const isVideoUploaded = videoUrl && file;
  const isHasNoVideo = !isUploading && !videoUrl;

  return (
    <UploadPageContainer>
      <Header>
        <Title>Upload video</Title>
        <Subtitle>This video will be published to {user?.username}</Subtitle>
      </Header>
      <Content>
        <Aside component="aside">
          {isVideoUploading && (
            <UploadProgress
              cancelUploding={handleCancelUploading}
              file={file}
              progress={progress}
            />
          )}
          {isVideoUploaded && <PreviewVideo file={file} videoUrl={videoUrl} />}
          {isHasNoVideo && <UploadVideo onDrop={handleUpload} />}
        </Aside>
        <UploadForm
          handleDiscard={handleDiscard}
          user={user as User}
          videoUrl={videoUrl}
        />
      </Content>
    </UploadPageContainer>
  );
}

export default SignUpPage;

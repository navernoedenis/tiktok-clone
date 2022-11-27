import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideo } from 'hooks/useVideo';
import { Post } from 'types/post';

import HeartIcon from '@mui/icons-material/FavoriteBorderRounded';

import {
  LikesBlock,
  LikesCount,
  ProfilePostContainer,
  Video,
  VideoSkeleton,
  VideoMask,
} from './styles';

interface ProfilePostProps {
  post: Post;
}

function ProfilePost({ post }: ProfilePostProps): JSX.Element {
  const navigate = useNavigate();
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  const { videoRef, togglePlay } = useVideo();

  const openVideoPostModal = (): void => {
    navigate(`/${post.user.username}/video/${post.postId}`, {
      state: { modal: true },
    });
  };

  return (
    <ProfilePostContainer
      onClick={openVideoPostModal}
      onMouseEnter={togglePlay}
      onMouseLeave={togglePlay}
    >
      <Video
        loop
        muted
        onLoadedData={() => setVideoLoaded(true)}
        playsInline
        ref={videoRef}
        src={post.videoUrl}
        sx={{ display: isVideoLoaded ? 'block' : 'none' }}
      />

      {isVideoLoaded ? (
        <VideoMask>
          <LikesBlock>
            <HeartIcon />
            <LikesCount>{post.likesCount}</LikesCount>
          </LikesBlock>
        </VideoMask>
      ) : (
        <VideoSkeleton variant="rectangular" height="100%" width="100%" />
      )}
    </ProfilePostContainer>
  );
}

export default ProfilePost;

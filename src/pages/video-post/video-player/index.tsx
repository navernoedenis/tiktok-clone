import React, { useState } from 'react';
import { useVideo } from 'hooks/useVideo';
import { Post } from 'types/post';

import MuteButton from '../mute-button';

import { VideoPlayerContainer, Video, VideoSkeleton } from './styles';

interface VideoPlayerProps {
  post: Post;
}

function VideoPlayer({ post }: VideoPlayerProps): JSX.Element {
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const { videoRef, isMuted, toggleMute } = useVideo();

  return (
    <VideoPlayerContainer>
      {!isVideoLoaded && <VideoSkeleton variant="rectangular" />}
      <Video
        autoPlay
        loop
        muted={isMuted}
        onLoadedData={() => setVideoLoaded(true)}
        playsInline
        ref={videoRef}
        src={post.videoUrl}
        sx={{ display: isVideoLoaded ? 'block' : 'none' }}
      />
      <MuteButton onClick={toggleMute} isMuted={isMuted} />
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;

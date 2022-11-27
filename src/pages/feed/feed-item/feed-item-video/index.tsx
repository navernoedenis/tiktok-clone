import React, { useState, useEffect } from 'react';
import { useVideo } from 'hooks/useVideo';
import { Post } from 'types/post';

import CommentButton from 'components/comment-button';
import LikeButton from 'components/like-button';
import MuteButton from '../mute-button';
import PlayButton from '../play-button';
import ShareButton from '../share-button';

import {
  Buttons,
  FeedItemVideoContainer,
  Video,
  VideoSkeleton,
  VideoContainer,
} from './styles';

interface FeedItemVideoProps {
  post: Post;
}

function FeedItemVideo({ post }: FeedItemVideoProps): JSX.Element {
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  const { isMuted, isPlaying, toggleMute, togglePlay, videoRef, setPlaying } =
    useVideo();

  useEffect(() => {
    if (!videoRef.current) return undefined;

    const playVideo = (entities: IntersectionObserverEntry[]): void => {
      entities.forEach(async (entity) => {
        if (entity.isIntersecting) {
          await videoRef.current?.play();
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);
        }
      });
    };

    const options: IntersectionObserverInit = {
      threshold: [0.4],
    };

    const videoObserver = new IntersectionObserver(playVideo, options);
    videoObserver.observe(videoRef.current);

    return () => {
      videoObserver.disconnect();
    };
  }, [videoRef, setPlaying]);

  return (
    <FeedItemVideoContainer>
      <VideoContainer>
        {!isVideoLoaded && <VideoSkeleton />}
        <Video
          loop
          muted={isMuted}
          onLoadedData={() => setVideoLoaded(true)}
          ref={videoRef}
          src={post.videoUrl}
        />
        {isVideoLoaded && (
          <>
            <PlayButton isPlaying={isPlaying} onToggle={togglePlay} />
            <MuteButton isMuted={isMuted} onToggle={toggleMute} />
          </>
        )}
      </VideoContainer>
      <Buttons spacing="16px">
        <LikeButton post={post} />
        <CommentButton post={post} />
        <ShareButton />
      </Buttons>
    </FeedItemVideoContainer>
  );
}

export default FeedItemVideo;

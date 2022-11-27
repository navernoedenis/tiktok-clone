import React, { useState } from 'react';
import { Comment } from 'types/comment';
import VideoPlayerSkeleton from './skeleton';
import {
  Avatar,
  Credentials,
  Message,
  Username,
  VideoPlayerCommentContainer,
} from './styles';

interface VideoPlayerCommentProps {
  comment: Comment;
}

function VideoPlayerComment({ comment }: VideoPlayerCommentProps): JSX.Element {
  const [isCommentLoaded, setCommentLoaded] = useState(false);

  return (
    <>
      {!isCommentLoaded && <VideoPlayerSkeleton />}
      <VideoPlayerCommentContainer
        sx={{ display: isCommentLoaded ? 'flex' : 'none' }}
      >
        <Avatar
          src={comment.user.photoURL}
          onLoad={() => setCommentLoaded(true)}
        />
        <Credentials>
          <Username to={`/${comment.user.username}`}>
            {comment.user.username}
          </Username>
          <Message>{comment.message}</Message>
        </Credentials>
      </VideoPlayerCommentContainer>
    </>
  );
}

export default VideoPlayerComment;

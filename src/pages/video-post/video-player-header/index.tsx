import React, { useState } from 'react';

import FollowButton from 'components/follow-button';
import LikeButton from 'components/like-button';
import CommentButton from 'components/comment-button';

import { useAuth } from 'context/auth';
import { User } from 'types/user';
import { Post } from 'types/post';
import {
  Audioname,
  Author,
  AuthorContainer,
  Avatar,
  AvatarSkeleton,
  Buttons,
  Caption,
  Credentials,
  Description,
  Displayname,
  FollowButtonContainer,
  Username,
  VideoPlayerHeaderContainer,
} from './styles';

interface VideoPlayerHeaderProps {
  post: Post;
}

function VideoPlayerHeader({ post }: VideoPlayerHeaderProps): JSX.Element {
  const { user } = useAuth();
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);
  const isMyPost = user?.uid === post.user.uid;

  return (
    <VideoPlayerHeaderContainer>
      <AuthorContainer>
        <Author>
          {!isAvatarLoaded && <AvatarSkeleton variant="circular" />}
          <Avatar
            onLoad={() => setAvatarLoaded(true)}
            src={post.user.photoURL}
            sx={{ display: isAvatarLoaded ? 'block' : 'none' }}
          />
          <Credentials>
            <Username to={`/${post.user.username}`}>
              {post.user.username}
            </Username>
            <Displayname>{post.user.displayName}</Displayname>
          </Credentials>
        </Author>

        {!isMyPost && (
          <FollowButtonContainer>
            <FollowButton me={user as User} user={post.user} />
          </FollowButtonContainer>
        )}
      </AuthorContainer>

      <Description>
        <Caption>{post.caption}</Caption>
        <Audioname>♭ {post.audioname}</Audioname>
      </Description>

      <Buttons direction="row" spacing="15px">
        <LikeButton post={post} />
        <CommentButton post={post} />
      </Buttons>
    </VideoPlayerHeaderContainer>
  );
}

export default VideoPlayerHeader;

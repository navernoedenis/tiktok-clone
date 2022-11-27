import React, { useState } from 'react';
import { useAuth } from 'context/auth';
import { Post } from 'types/post';
import { User } from 'types/user';

import FollowButton from 'components/follow-button';
import FeedItemVideo from './feed-item-video';
import {
  Audioname,
  Avatar,
  AvatarSkeleton,
  ButtonContainer,
  Caption,
  Content,
  Displayname,
  FeedItemContainer,
  Header,
  UserBlock,
  Username,
} from './styles';

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps): JSX.Element {
  const { user } = useAuth();
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);
  const isMyPost = user?.uid === post.user.uid;

  return (
    <FeedItemContainer>
      {!isAvatarLoaded && <AvatarSkeleton variant="circular" />}
      <Avatar
        onLoad={() => setAvatarLoaded(true)}
        src={post.user.photoURL}
        sx={{ display: isAvatarLoaded ? 'block' : 'none' }}
      />
      <Content>
        <Header>
          <UserBlock>
            <Username to={`/${post.user.username}`}>
              {post.user.username}
            </Username>
            <Displayname>{post.user.displayName}</Displayname>
          </UserBlock>

          <Caption>{post.caption}</Caption>
          <Audioname>&#9837; {post.audioname}</Audioname>
        </Header>

        <FeedItemVideo post={post} />

        {!isMyPost && (
          <ButtonContainer>
            <FollowButton me={user as User} user={post.user} />
          </ButtonContainer>
        )}
      </Content>
    </FeedItemContainer>
  );
}

export default FeedItem;

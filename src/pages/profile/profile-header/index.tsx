import React, { useState } from 'react';
import FollowButton from 'components/follow-button';

import { useAuth } from 'context/auth';
import { User } from 'types/user';
import {
  Avatar,
  AvatarSkeleton,
  Description,
  Displayname,
  ProfileHeaderContainer,
  Username,
} from './styles';

interface ProfileHeaderProps {
  profile: User;
}

function ProfileHeader({ profile }: ProfileHeaderProps): JSX.Element {
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);
  const { user } = useAuth();

  return (
    <ProfileHeaderContainer>
      {!isAvatarLoaded && <AvatarSkeleton variant="circular" />}
      <Avatar
        onLoad={() => setAvatarLoaded(true)}
        src={profile.photoURL}
        sx={{ display: isAvatarLoaded ? 'block' : 'none' }}
      />
      <Description>
        <Username>{profile.username}</Username>
        <Displayname>{profile.displayName}</Displayname>
        {profile.uid !== user?.uid && (
          <FollowButton me={user as User} user={profile} />
        )}
      </Description>
    </ProfileHeaderContainer>
  );
}

export default ProfileHeader;

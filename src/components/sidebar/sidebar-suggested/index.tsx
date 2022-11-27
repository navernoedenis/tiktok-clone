import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import UserService from 'services/user';

import { useAuth } from 'context/auth';
import { User } from 'types/user';
import {
  SuggestedAccountContainer,
  SuggestedAccountsContainer,
  SuggestedList,
  Title,
  UserAvatar,
  UserAvatarSkeleton,
  UserDetails,
  UserDisplayname,
  UserNickname,
} from './styles';

function SuggestedAccounts(): JSX.Element | null {
  const { user } = useAuth();
  const [suggested, setSuggested] = useState<User[]>([]);

  useEffect(() => {
    if (!user) return;

    UserService.getSuggested(user.uid)
      .then(setSuggested)
      .catch((error) => toast.error(error.message));
  }, [user]);

  if (!suggested.length) {
    return null;
  }

  return (
    <SuggestedAccountsContainer>
      <Title>Suggested Accounts</Title>
      <SuggestedList>
        {suggested.map((item) => (
          <SuggestedAccount key={item.uid} user={item} />
        ))}
      </SuggestedList>
    </SuggestedAccountsContainer>
  );
}

export default SuggestedAccounts;

interface SuggestedAccountProps {
  user: User;
}

function SuggestedAccount({ user }: SuggestedAccountProps): JSX.Element {
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <SuggestedAccountContainer to={`/${user.username}`}>
      {!isAvatarLoaded && <UserAvatarSkeleton variant="circular" />}
      <UserAvatar
        onLoad={() => setAvatarLoaded(true)}
        src={user.photoURL}
        sx={{ display: isAvatarLoaded ? 'block' : 'none' }}
      />
      <UserDetails>
        <UserNickname>{user.username}</UserNickname>
        <UserDisplayname>{user.displayName}</UserDisplayname>
      </UserDetails>
    </SuggestedAccountContainer>
  );
}

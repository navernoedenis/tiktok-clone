import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from 'app/firebase';
import { User } from 'types/user';
import { ProfileStatisticContainer, Item, Count, Text } from './styles';

interface ProfileStatisticProps {
  profile: User;
}

function ProfileStatistic({ profile }: ProfileStatisticProps): JSX.Element {
  const followingsRef = collection(db, 'users', profile.uid, 'followings');
  const followersRef = collection(db, 'users', profile.uid, 'followers');
  const likedPostsRef = collection(db, 'users', profile.uid, 'likedPosts');

  const [followingsSnapshot] = useCollection(followingsRef);
  const [followersSnapshot] = useCollection(followersRef);
  const [likedPostsSnapshot] = useCollection(likedPostsRef);

  return (
    <ProfileStatisticContainer direction="row" spacing="15px">
      <Item>
        <Count>{followingsSnapshot?.size ?? 0}</Count>
        <Text>Following</Text>
      </Item>
      <Item>
        <Count>{followersSnapshot?.size ?? 0}</Count>
        <Text>Followers</Text>
      </Item>
      <Item>
        <Count>{likedPostsSnapshot?.size ?? 0}</Count>
        <Text>Likes</Text>
      </Item>
    </ProfileStatisticContainer>
  );
}

export default ProfileStatistic;

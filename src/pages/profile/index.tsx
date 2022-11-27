import React from 'react';
import { useParams } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collection,
  CollectionReference as CollectionRef,
  limit,
  query,
  where,
} from 'firebase/firestore';

import { db } from 'app/firebase';
import { User } from 'types/user';

import Loader from 'components/loader';
import Sidebar from 'components/sidebar';

import ProfileHeader from './profile-header';
import ProfileStatistic from './profile-statistic';
import ProfileTabs from './profile-tabs';

import { ProfilePageContainer, ProfileInfo } from './styles';

function ProfilePage(): JSX.Element {
  const params = useParams<{ username: string }>();

  const profileQuery = query(
    collection(db, 'users') as CollectionRef<User>,
    where('username', '==', params.username),
    limit(1)
  );

  const [profiles, loading] = useCollectionData(profileQuery);

  if (loading) {
    return <Loader />;
  }

  if (!profiles?.length) {
    return <h1>EMPTY DATA</h1>;
  }

  return (
    <ProfilePageContainer>
      <Sidebar />
      <ProfileInfo>
        <ProfileHeader profile={profiles[0]} />
        <ProfileStatistic profile={profiles[0]} />
        <ProfileTabs profile={profiles[0]} />
      </ProfileInfo>
    </ProfilePageContainer>
  );
}

export default ProfilePage;

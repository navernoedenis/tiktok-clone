import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collection,
  CollectionReference as CollectionRef,
} from 'firebase/firestore';

import { db } from 'app/firebase';
import { User } from 'types/user';
import { Post } from 'types/post';

import NoContent from '../no-content';
import ProfilePost from '../profile-post';

import {
  ActiveTabBar,
  ActiveTabContent,
  ProfileTabsContainer,
  Tab,
  Tabs,
} from './styles';

interface ProfileTabProps {
  profile: User;
}

function ProfileTabs({ profile }: ProfileTabProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(1);

  const postsRef = collection(
    db,
    'users',
    profile.uid,
    'posts'
  ) as CollectionRef<Post>;

  const likedPostsRef = collection(
    db,
    'users',
    profile.uid,
    'likedPosts'
  ) as CollectionRef<Post>;

  const [postsData, isPostsLoading] = useCollectionData(postsRef);
  const [likedPostsData, isLikedPostsLoading] =
    useCollectionData(likedPostsRef);

  let activeTabMarginLeft = '0%';
  switch (activeTab) {
    case 2: {
      activeTabMarginLeft = '50%';
      break;
    }
    default:
      activeTabMarginLeft = '0%';
      break;
  }

  let posts: Post[] = [];
  switch (activeTab) {
    case 2: {
      posts = likedPostsData ?? [];
      break;
    }
    default:
      posts = postsData ?? [];
      break;
  }

  const isLoading = isPostsLoading || isLikedPostsLoading;

  return (
    <ProfileTabsContainer>
      <Tabs>
        <Tab
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)}
        >
          Videos
        </Tab>
        <Tab
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => setActiveTab(2)}
        >
          Liked
        </Tab>
      </Tabs>
      <ActiveTabBar sx={{ marginLeft: activeTabMarginLeft, width: '50%' }} />

      {!isLoading && !posts.length && <NoContent />}

      <ActiveTabContent>
        {posts.map((post) => (
          <ProfilePost key={post.postId} post={post} />
        ))}
      </ActiveTabContent>
    </ProfileTabsContainer>
  );
}

export default ProfileTabs;

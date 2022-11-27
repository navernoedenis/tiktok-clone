import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collectionGroup,
  CollectionReference as CollectionRef,
  query,
  orderBy,
} from 'firebase/firestore';

import { db } from 'app/firebase';
import { Post } from 'types/post';

import FeedItem from '../feed-item';
import FeedItemSkeleton from '../feed-item/skeleton';
import { FeedListContainer } from './styles';

function FeedList(): JSX.Element {
  const postsQuery = query(
    collectionGroup(db, 'posts') as CollectionRef<Post>,
    orderBy('createdAt', 'desc')
  );
  const [posts, isPostsLoading] = useCollectionData(postsQuery);

  return (
    <FeedListContainer>
      {isPostsLoading && (
        <>
          <FeedItemSkeleton />
          <FeedItemSkeleton />
        </>
      )}
      {posts?.map((post) => (
        <FeedItem key={post.postId} post={post} />
      ))}
    </FeedListContainer>
  );
}

export default FeedList;

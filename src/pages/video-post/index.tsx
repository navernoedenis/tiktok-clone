import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collectionGroup,
  CollectionReference as CollectionRef,
  limit,
  query,
  where,
} from 'firebase/firestore';

import { db } from 'app/firebase';
import { Post } from 'types/post';

import Loader from 'components/loader';

import VideoPlayer from './video-player';
import VideoPlayerComments from './video-player-comments';
import VideoPlayerHeader from './video-player-header';
import VideoPlayerNewComment from './video-player-new-comment';

import { VideoPostContainer, Aside } from './styles';

function VideoPostPage(): JSX.Element {
  const params = useParams<{ postId: string }>();

  const postQuery = query(
    collectionGroup(db, 'posts') as CollectionRef<Post>,
    where('postId', '==', params.postId),
    limit(1)
  );

  const [posts, loading] = useCollectionData(postQuery);

  if (loading) {
    return <Loader />;
  }

  if (!posts?.length) {
    return <Navigate to="/" />;
  }

  return (
    <VideoPostContainer>
      <VideoPlayer post={posts[0]} />
      <Aside component="aside">
        <VideoPlayerHeader post={posts[0]} />
        <VideoPlayerComments post={posts[0]} />
        <VideoPlayerNewComment post={posts[0]} />
      </Aside>
    </VideoPostContainer>
  );
}

export default VideoPostPage;

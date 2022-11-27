import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
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

import CloseButton from './close-button';
import VideoPlayer from './video-player';
import VideoPlayerComments from './video-player-comments';
import VideoPlayerHeader from './video-player-header';
import VideoPlayerNewComment from './video-player-new-comment';

import { VideoPostModalContainer, Aside } from './styles';

function VideoPostPage(): JSX.Element {
  const params = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const postQuery = query(
    collectionGroup(db, 'posts') as CollectionRef<Post>,
    where('postId', '==', params.postId),
    limit(1)
  );

  const [posts, loading] = useCollectionData(postQuery);

  useEffect(() => {
    const { body } = document;
    body.style.overflowY = 'hidden';

    return () => {
      body.style.overflowY = '';
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!posts?.length) {
    return <Navigate to="/" />;
  }

  return (
    <VideoPostModalContainer>
      <VideoPlayer post={posts[0]} />
      <Aside component="aside">
        <VideoPlayerHeader post={posts[0]} />
        <VideoPlayerComments post={posts[0]} />
        <VideoPlayerNewComment post={posts[0]} />
      </Aside>
      <CloseButton onClick={() => navigate(-1)} />
    </VideoPostModalContainer>
  );
}

export default VideoPostPage;

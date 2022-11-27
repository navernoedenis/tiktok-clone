import React, { useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  collection,
  CollectionReference as CollectionRef,
} from 'firebase/firestore';

import { db } from 'app/firebase';
import { Comment } from 'types/comment';
import { Post } from 'types/post';

import VideoPlayerComment from '../video-player-comment';
import { VideoPlayerCommentsContainer } from './styles';

interface VideoPlayerCommentsProps {
  post: Post;
}

function VideoPlayerComments({ post }: VideoPlayerCommentsProps): JSX.Element {
  const commentsListRef = useRef<HTMLDivElement | null>(null);
  const commentsCollectionRef = collection(
    db,
    'users',
    post.user.uid,
    'posts',
    post.postId,
    'comments'
  ) as CollectionRef<Comment>;

  const [comments] = useCollectionData(commentsCollectionRef);

  useEffect(() => {
    const node = commentsListRef.current;
    if (node) {
      node.scrollTo(0, node.scrollHeight);
    }
  }, [commentsListRef, comments]);

  return (
    <VideoPlayerCommentsContainer ref={commentsListRef} spacing="15px">
      {comments?.map((comment) => (
        <VideoPlayerComment key={comment.commentId} comment={comment} />
      ))}
    </VideoPlayerCommentsContainer>
  );
}

export default VideoPlayerComments;

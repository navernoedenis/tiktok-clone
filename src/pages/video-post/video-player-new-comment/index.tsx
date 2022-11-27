import React, { useState, FormEvent } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { db, timestamp } from 'app/firebase';

import { Comment } from 'types/comment';
import { Post } from 'types/post';
import { User } from 'types/user';

import { useAuth } from 'context/auth';
import {
  CommentField,
  PostButton,
  VideoPlayerCommentContainer,
} from './styles';

interface VideoPlayerCommentProps {
  post: Post;
}

function VideoPlayerComment({ post }: VideoPlayerCommentProps): JSX.Element {
  const { user } = useAuth();

  const commentsRef = collection(
    db,
    'users',
    post.user.uid,
    'posts',
    post.postId,
    'comments'
  );

  const [comment, setMessage] = useState('');

  const handleSubmit = async (
    event: FormEvent<HTMLDivElement>
  ): Promise<void> => {
    event.preventDefault();

    const trimedComment = comment.trim();

    if (!trimedComment.length) {
      toast.error('Comment field is empty');
      return;
    }

    if (trimedComment.length < 3 || trimedComment.length > 120) {
      toast.error('Comment should be over 3 and less 120 symbols');
      return;
    }

    const newComment: Comment = {
      commentId: nanoid(),
      createdAt: timestamp(),
      message: trimedComment,
      user: user as User,
    };

    await setDoc(doc(commentsRef, newComment.commentId), newComment);
    setMessage('');
  };

  return (
    <VideoPlayerCommentContainer component="form" onSubmit={handleSubmit}>
      <CommentField
        onChange={(event) => setMessage(event.target.value)}
        value={comment}
      />
      <PostButton type="submit">Post</PostButton>
    </VideoPlayerCommentContainer>
  );
}

export default VideoPlayerComment;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

import ChatIcon from '@mui/icons-material/ChatRounded';

import { db } from 'app/firebase';
import { Post } from 'types/post';
import { CommentButtonContainer, Button, CommentsCount } from './styles';

interface CommentButtonProps {
  post: Post;
}

function CommentButton({ post }: CommentButtonProps): JSX.Element {
  const navigate = useNavigate();

  const commentsRef = collection(
    db,
    'users',
    post.user.uid,
    'posts',
    post.postId,
    'comments'
  );
  const [commentsSnapshot] = useCollection(commentsRef);

  const openVideoPostModal = (): void => {
    navigate(`/${post.user.username}/video/${post.postId}`, {
      state: { modal: true },
    });
  };

  return (
    <CommentButtonContainer>
      <Button onClick={openVideoPostModal}>
        <ChatIcon />
      </Button>
      <CommentsCount>{commentsSnapshot?.size ?? 0}</CommentsCount>
    </CommentButtonContainer>
  );
}

export default CommentButton;

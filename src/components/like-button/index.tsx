import React, { useState } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db, increment } from 'app/firebase';
import { useAuth } from 'context/auth';

import LikeIcon from '@mui/icons-material/FavoriteRounded';

import { Post } from 'types/post';
import { User } from 'types/user';
import {
  LikeButtonContainer,
  Button,
  ButtonSkeleton,
  LikesCount,
} from './styles';

interface LikeButtonProps {
  post: Post;
}

function LikeButton({ post }: LikeButtonProps): JSX.Element {
  const { user } = useAuth();
  const [likes, setLikes] = useState(post.likesCount);

  const myPostsRef = collection(db, 'users', (user as User).uid, 'likedPosts');
  const myPostRef = doc(myPostsRef, post.postId);

  const hisPostsRef = collection(db, 'users', post.user.uid, 'posts');
  const hisPostRef = doc(hisPostsRef, post.postId);

  const [myPostDoc, isLoading] = useDocumentData(myPostRef);

  const likePost = async (): Promise<void> => {
    setLikes((prev) => prev + 1);
    await setDoc(myPostRef, post);
    await updateDoc(hisPostRef, { likesCount: increment(1) });
  };

  const dislikePost = async (): Promise<void> => {
    setLikes((prev) => prev - 1);
    await deleteDoc(myPostRef);
    await updateDoc(hisPostRef, { likesCount: increment(-1) });
  };

  return (
    <LikeButtonContainer>
      {isLoading && <ButtonSkeleton variant="circular" />}

      {!isLoading && !myPostDoc && (
        <Button onClick={likePost}>
          <LikeIcon />
        </Button>
      )}

      {myPostDoc && (
        <Button className="liked" onClick={dislikePost}>
          <LikeIcon />
        </Button>
      )}
      <LikesCount>{likes}</LikesCount>
    </LikeButtonContainer>
  );
}

export default LikeButton;

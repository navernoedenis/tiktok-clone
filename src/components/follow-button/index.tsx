import React from 'react';
import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from 'app/firebase';

import { User } from 'types/user';
import { FollowButtonContainer } from './styles';

interface FollowButtonProps {
  me: User;
  user: User;
}

function FollowButton({ me, user }: FollowButtonProps): JSX.Element {
  const myFollowingsRef = collection(db, 'users', me.uid, 'followings');
  const myFollowingRef = doc(myFollowingsRef, user.uid);

  const himFollowersRef = collection(db, 'users', user.uid, 'followers');
  const himFollowerRef = doc(himFollowersRef, me.uid);

  const [myFollowingDoc, loading] = useDocument(myFollowingRef);

  const addFollow = async (): Promise<void> => {
    await setDoc(myFollowingRef, user);
    await setDoc(himFollowerRef, me);
  };

  const removeFollow = async (): Promise<void> => {
    await deleteDoc(myFollowingRef);
    await deleteDoc(himFollowerRef);
  };

  if (loading) {
    return <FollowButtonContainer>Loading...</FollowButtonContainer>;
  }

  return myFollowingDoc?.exists() ? (
    <FollowButtonContainer onClick={removeFollow}>
      Unfollow
    </FollowButtonContainer>
  ) : (
    <FollowButtonContainer onClick={addFollow}>Follow</FollowButtonContainer>
  );
}

export default FollowButton;

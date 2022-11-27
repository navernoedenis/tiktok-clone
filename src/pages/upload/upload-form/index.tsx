import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { db, timestamp } from 'app/firebase';

import { useDiscardModal } from 'context/discard-modal';
import { useSuccessModal } from 'context/success-modal';

import { Post } from 'types/post';
import { User } from 'types/user';

import DiscardModal from '../discard-modal';
import SuccessModal from '../success-modal';

import {
  Buttons,
  DiscardButton,
  Form,
  Header,
  Input,
  Limit,
  PostButton,
  Title,
  UploadFormContainer,
} from './styles';

interface UploadFormProps {
  handleDiscard: () => void;
  user: User;
  videoUrl: string;
}

const MAX_CAPTION_LENGTH = 150;

function UploadForm({
  handleDiscard,
  user,
  videoUrl,
}: UploadFormProps): JSX.Element {
  const navigate = useNavigate();
  const { onCloseDiscard } = useDiscardModal();
  const { onOpenSuccess, onCloseSuccess } = useSuccessModal();

  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const isPostCanBeDiscarded = Boolean(videoUrl || caption);
  const isPostReadyToBePosted = Boolean(videoUrl && caption.trim());

  const handleFormSubmit = async (
    event: FormEvent<HTMLDivElement>
  ): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    try {
      const post: Post = {
        audioname: `original sound - ${user.displayName}`,
        caption,
        createdAt: timestamp(),
        likesCount: 0,
        postId: nanoid(),
        user,
        videoUrl,
      };

      const usersRef = collection(db, 'users');
      const postRef = doc(usersRef, post.user.uid, 'posts', post.postId);
      await setDoc(postRef, post);

      onOpenSuccess();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDiscardForm = (): void => {
    handleDiscard();
    onCloseDiscard();
    onCloseSuccess();
    setCaption('');
  };

  const handleGoToProfilePage = (): void => {
    navigate(`/${user.username}`);
    onCloseSuccess();
  };

  return (
    <>
      <DiscardModal onDiscard={handleDiscardForm} onSuccess={onCloseDiscard} />
      <SuccessModal
        onDiscard={handleGoToProfilePage}
        onSuccess={handleDiscardForm}
      />
      <UploadFormContainer>
        <Header>
          <Title>Caption</Title>
          <Limit>
            {caption.length} / {MAX_CAPTION_LENGTH}
          </Limit>
        </Header>
        <Form component="form" onSubmit={handleFormSubmit}>
          <Input
            maxLength={MAX_CAPTION_LENGTH}
            onChange={(event) => setCaption(event.target.value)}
            value={caption}
          />
          <Buttons>
            <DiscardButton
              disabled={!isPostCanBeDiscarded}
              onClick={handleDiscardForm}
              type="button"
            >
              Discard
            </DiscardButton>
            <PostButton
              disabled={!isPostReadyToBePosted || loading}
              type="submit"
            >
              Post
            </PostButton>
          </Buttons>
        </Form>
      </UploadFormContainer>
    </>
  );
}

export default UploadForm;

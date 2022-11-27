import React from 'react';
import { useSuccessModal } from 'context/success-modal';
import Modal from 'components/modal';
import {
  ConfirmButton,
  DiscardButton,
  Header,
  Subtitle,
  SuccessModalContainer,
  Title,
} from './styles';

interface SuccessModalProps {
  onDiscard: () => void;
  onSuccess: () => void;
}

function SuccessModal({
  onDiscard,
  onSuccess,
}: SuccessModalProps): JSX.Element {
  const { isSuccessOpen, onCloseSuccess } = useSuccessModal();

  return (
    <Modal isOpen={isSuccessOpen} onClose={onCloseSuccess}>
      <SuccessModalContainer>
        <Header>
          <Title>Your video is being</Title>
          <Subtitle>uploaded to Tiktok</Subtitle>
        </Header>
        <ConfirmButton onClick={onSuccess}>Upload another video</ConfirmButton>
        <DiscardButton onClick={onDiscard}>View Profile</DiscardButton>
      </SuccessModalContainer>
    </Modal>
  );
}

export default SuccessModal;

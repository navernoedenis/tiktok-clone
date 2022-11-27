import React from 'react';
import { useDiscardModal } from 'context/discard-modal';
import Modal from 'components/modal';
import {
  ConfirmButton,
  DiscardButton,
  DiscardModalContainer,
  Header,
  Subtitle,
  Title,
} from './styles';

interface DiscardModalProps {
  onDiscard: () => void;
  onSuccess: () => void;
}

function DiscardModal({
  onDiscard,
  onSuccess,
}: DiscardModalProps): JSX.Element {
  const { isDiscardOpen, onCloseDiscard } = useDiscardModal();

  return (
    <Modal isOpen={isDiscardOpen} onClose={onCloseDiscard}>
      <DiscardModalContainer>
        <Header>
          <Title>Discard this post?</Title>
          <Subtitle>The video and all edits will be discarded</Subtitle>
        </Header>
        <DiscardButton onClick={onDiscard}>Discard</DiscardButton>
        <ConfirmButton onClick={onSuccess}>Continue editing</ConfirmButton>
      </DiscardModalContainer>
    </Modal>
  );
}

export default DiscardModal;

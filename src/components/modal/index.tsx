import React, { useRef, useEffect, ReactNode } from 'react';
import { Backdrop } from './styles';
import Portal from './portal';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps): JSX.Element | null {
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const backdrop = backdropRef.current;

    const handleKeyUp = (event: globalThis.KeyboardEvent): void => {
      ['Escape', 'Enter'].includes(event.key) && onClose();
    };

    const handleClick = (event: globalThis.MouseEvent): void => {
      event.target === backdrop && onClose();
    };

    if (backdrop) {
      window.addEventListener('keyup', handleKeyUp);
      backdrop.addEventListener('click', handleClick);
    }

    return () => {
      if (backdrop) {
        window.removeEventListener('keyup', handleKeyUp);
        backdrop.removeEventListener('click', handleClick);
      }
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <Portal>
      <Backdrop ref={backdropRef}>{children}</Backdrop>
    </Portal>
  ) : null;
}

export default Modal;

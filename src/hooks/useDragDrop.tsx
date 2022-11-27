import { useEffect, useRef, ChangeEvent, MutableRefObject } from 'react';

interface useDragDropReturnType {
  dropRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  selectFile: () => void;
  onSelectFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function useDragDrop(
  onDrop: (file: File) => void
): useDragDropReturnType {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (event: globalThis.DragEvent): void => {
    event.preventDefault();

    if (dropRef.current) {
      dropRef.current.style.backgroundColor = '#efefef';
      dropRef.current.style.borderColor = '#000';
    }
  };

  const handleDrop = (event: globalThis.DragEvent): void => {
    event.preventDefault();

    if (dropRef.current) {
      dropRef.current.style.backgroundColor = '';
      dropRef.current.style.borderColor = '';
    }

    const { dataTransfer } = event;

    if (dataTransfer?.files.length) {
      const file = dataTransfer.files[0];
      onDrop(file);
      dataTransfer.clearData();
    }
  };

  useEffect(() => {
    const dropArea = dropRef.current;
    if (!dropArea) return undefined;

    dropArea.addEventListener('dragover', handleDragOver);
    dropArea.addEventListener('drop', handleDrop);

    return () => {
      dropArea.removeEventListener('dragover', handleDragOver);
      dropArea.removeEventListener('drop', handleDrop);
    };
  });

  const selectFile = (): void => {
    inputRef.current?.click();
  };

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    file && onDrop(file);
  };

  return {
    dropRef,
    inputRef,
    selectFile,
    onSelectFile,
  };
}

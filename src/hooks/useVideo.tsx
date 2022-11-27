import { useState, useRef, MutableRefObject } from 'react';

interface useVideoReturnType {
  isMuted: boolean;
  isPlaying: boolean;
  setMuted: (value: boolean) => void;
  setPlaying: (value: boolean) => void;
  toggleMute: () => void;
  togglePlay: () => void;
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

export function useVideo(): useVideoReturnType {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(true);

  const toggleMute = (): void => {
    setMuted((prev) => !prev);
  };

  const togglePlay = async (): Promise<void> => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      await videoRef.current.play();
      setPlaying(true);
    }
  };

  return {
    isMuted,
    isPlaying,
    setMuted,
    setPlaying,
    toggleMute,
    togglePlay,
    videoRef,
  };
}

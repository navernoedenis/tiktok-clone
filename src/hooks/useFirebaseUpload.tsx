import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTask,
} from 'firebase/storage';
import { storage } from 'app/firebase';
import { User } from 'types/user';

interface useFirebaseUploadReturnType {
  file: File | null;
  handleCancelUploading: () => void;
  handleDiscard: () => void;
  handleUpload: (target: File) => Promise<void>;
  isUploading: boolean;
  progress: number;
  videoUrl: string;
}

export function useFirebaseUpload(user: User): useFirebaseUploadReturnType {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadTask, setUploadTask] = useState<UploadTask | null>(null);

  const handleCancelUploading = (): void => {
    if (uploadTask) {
      uploadTask.cancel();
      setUploading(false);
    }
  };

  const handleDiscard = (): void => {
    setFile(null);
    setVideoUrl('');
    setProgress(0);
  };

  const handleUpload = async (uploadFile: File): Promise<void> => {
    const fileId = nanoid();
    const storageRef = ref(storage, `uploads/${user.uid}/${fileId}`);
    const uploadingTask = uploadBytesResumable(storageRef, uploadFile);

    setUploadTask(uploadingTask);
    setFile(uploadFile);
    setUploading(true);

    uploadingTask.on(
      'state_changed',
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const fileProgress = Math.round((bytesTransferred / totalBytes) * 100);
        setProgress(fileProgress);
      },
      (error) => {
        toast.error(error.message);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadingTask.snapshot.ref);
        setVideoUrl(downloadURL);
        setUploading(false);
      }
    );
  };

  return {
    file,
    handleCancelUploading,
    handleDiscard,
    handleUpload,
    isUploading,
    progress,
    videoUrl,
  };
}

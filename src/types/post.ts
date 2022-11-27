import { FieldValue } from 'firebase/firestore';
import { User } from './user';

export interface Post {
  audioname: string;
  caption: string;
  createdAt: FieldValue;
  likesCount: number;
  postId: string;
  user: User;
  videoUrl: string;
}

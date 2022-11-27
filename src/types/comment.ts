import { FieldValue } from 'firebase/firestore';
import { User } from './user';

export interface Comment {
  commentId: string;
  createdAt: FieldValue;
  message: string;
  user: User;
}

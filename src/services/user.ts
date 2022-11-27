import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from 'app/firebase';
import { User } from 'types/user';

const checkUser = async (uid: string): Promise<boolean> => {
  const ref = doc(db, 'users', uid);
  const snapshot = await getDoc(ref);
  return snapshot.exists();
};

const checkUsername = async (username: string): Promise<boolean> => {
  const ref = doc(db, `usernames/${username}`);
  const snapshot = await getDoc(ref);
  return snapshot.exists();
};

const createUser = async (user: User): Promise<void> => {
  await setDoc(doc(db, 'users', user.uid), user);
};

const createUsername = async (username: string, uid: string): Promise<void> => {
  await setDoc(doc(db, 'usernames', username), { uid });
};

const findMany = async (displayName: string): Promise<User[]> => {
  const ref = collection(db, 'users');
  const q = query(ref, where('displayName', '>=', displayName), limit(10));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((user) => user.data()) as User[];
};

const findOne = async (uid: string): Promise<User | null> => {
  const ref = doc(db, 'users', uid);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) {
    return null;
  }
  return snapshot.data() as User;
};

const getSuggested = async (uid: string): Promise<User[]> => {
  const ref = collection(db, 'users');
  const q = query(ref, where('uid', '!=', uid), limit(5));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((user) => user.data()) as User[];
};

const UserService = {
  checkUser,
  checkUsername,
  createUser,
  createUsername,
  findMany,
  findOne,
  getSuggested,
};

export default UserService;

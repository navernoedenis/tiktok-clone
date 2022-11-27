import { signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import { auth, provider } from 'app/firebase';

const loginWithGoogle = async (): Promise<UserCredential> => {
  const credential = await signInWithPopup(auth, provider);
  return credential;
};

const logoutWithGoogle = async (): Promise<void> => {
  await signOut(auth);
};

const AuthService = {
  loginWithGoogle,
  logoutWithGoogle,
};

export default AuthService;

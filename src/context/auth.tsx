import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'app/firebase';
import { User } from 'types/user';

import UserService from 'services/user';
import StorageService from 'services/storage';

import Loader from 'components/loader';

interface AuthProviderInterface {
  user: User | null;
}

const defaultValues: AuthProviderInterface = {
  user: null,
};

const AuthContext = createContext<AuthProviderInterface>(defaultValues);

// useAuthState hook by default return null value, even if user logged in.
// After few seconds it returns a corrent user credential.
// But it causes the problem:
// Render Loading => SignIn Page (Unauth page) => Loading => Feed Page (Auth page)
// This variable helps to fix this problem.
const isLoggedIn = StorageService.get<boolean>('isLoggedIn');

function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const [credential] = useAuthState(auth);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async (uid: string): Promise<void> => {
      const u = await UserService.findOne(uid);
      setUser(u);
      setLoading(false);
    };

    if (!isLoggedIn) {
      setLoading(false);
    }

    if (credential) {
      setLoading(true);
      void checkUser(credential.uid);
    }
  }, [credential]);

  const value = useMemo(() => ({ user }), [user]);

  if (isLoading) {
    return <Loader />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthProviderInterface {
  return useContext(AuthContext);
}

export default AuthProvider;

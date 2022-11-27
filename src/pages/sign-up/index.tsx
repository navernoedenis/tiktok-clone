import React, { useState, useEffect, FormEvent } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import toast from 'react-hot-toast';

import UserService from 'services/user';
import { removeWhiteSpace } from 'utils/validate';
import {
  Field,
  Form,
  Hint,
  Input,
  Label,
  SignUpButton,
  SignUpPageContainer,
  Title,
} from './styles';

interface SignUpPageProps {
  user: FirebaseUser | null;
}

function SignUpPage({ user }: SignUpPageProps): JSX.Element {
  const [isTaken, setTaken] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (user) {
      const defaultUsername = removeWhiteSpace(user.displayName as string);
      setUsername(defaultUsername);
    }
  }, [user]);

  useEffect(() => {
    const u = removeWhiteSpace(username);

    const checkUsername = async (): Promise<void> => {
      if (u.length >= 3 && u.length <= 20) {
        const isUserTaken = await UserService.checkUsername(`@${u}`);
        setTaken(isUserTaken);
      }
    };

    if (u) {
      void checkUsername();
    }
  }, [username]);

  const signUp = async (event: FormEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault();

    if (!user) {
      toast.error('Something wrong with user data...');
      return;
    }

    if (isTaken) {
      toast.error('This username is taken!');
      return;
    }

    if (username.length <= 3) {
      toast.error('Minimum 3 characters');
      return;
    }
    if (username.length >= 20) {
      toast.error('Maximum 20 characters');
      return;
    }

    const u = `@${removeWhiteSpace(username)}`;

    try {
      setLoading(true);

      await UserService.createUser({
        uid: user.uid,
        displayName: user.displayName ?? '',
        username: u,
        email: user.email ?? '',
        photoURL: user.photoURL ?? '',
      });

      await UserService.createUsername(u, user.uid);

      window.location.reload();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpPageContainer>
      <Title>Sign Up</Title>
      <Form component="form" onSubmit={signUp}>
        <Field>
          <Label>Create username</Label>
          <Input
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          {isTaken ? (
            <Hint className="error">Username is already taken</Hint>
          ) : (
            <Hint>This username is available.</Hint>
          )}
        </Field>
        <SignUpButton disabled={isTaken || isLoading} type="submit">
          Sign up
        </SignUpButton>
      </Form>
    </SignUpPageContainer>
  );
}

export default SignUpPage;

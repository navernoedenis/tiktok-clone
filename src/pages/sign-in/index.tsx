import React from 'react';
import { User as FirebaseUser } from 'firebase/auth';

import AuthService from 'services/auth';
import StorageService from 'services/storage';
import UserService from 'services/user';

import LoginCard from './login-card';

// import AppleIcon from './icons/apple';
// import FacebookIcon from './icons/facebook';
import GoogleIcon from './icons/google';
// import InstagramIcon from './icons/instagram';
// import QrIcon from './icons/qr';
// import TwitterIcon from './icons/twitter';
// import UserIcon from './icons/user';
// import VkIcon from './icons/vk';

import { SignInPageContainer, Title, LoginCards } from './styles';

interface SignInPageProps {
  setNewUser: (value: boolean) => void;
  setUser: (user: FirebaseUser | null) => void;
}

function SignInPage({ setNewUser, setUser }: SignInPageProps): JSX.Element {
  const signInWithGoogle = async (): Promise<void> => {
    const credential = await AuthService.loginWithGoogle();

    if (credential) {
      const IsUserExist = await UserService.checkUser(credential.user.uid);
      setNewUser(!IsUserExist);
      setUser(credential.user);
      StorageService.save('isLoggedIn', true);
    }
  };

  return (
    <SignInPageContainer>
      <Title variant="h1">Log in to TikTok</Title>
      <LoginCards>
        {/* <LoginCard icon={<QrIcon />} title="Use QR Code" />
        <LoginCard icon={<UserIcon />} title="Use phone / email / username" /> */}
        <LoginCard
          icon={<GoogleIcon />}
          onClick={signInWithGoogle}
          title="Continue with Google"
        />
        {/* <LoginCard icon={<FacebookIcon />} title="Continue with Facebook" />
        <LoginCard icon={<VkIcon />} title="Continue with VK" />
        <LoginCard icon={<TwitterIcon />} title="Continue with Twitter" />
        <LoginCard icon={<AppleIcon />} title="Continue with Apple" />
        <LoginCard icon={<InstagramIcon />} title="Continue with Instagram" /> */}
      </LoginCards>
    </SignInPageContainer>
  );
}

export default SignInPage;

import React, { useState } from 'react';
import { User as FirebaseUser } from 'firebase/auth';

import SignInPage from 'pages/sign-in';
import SignUpPage from 'pages/sign-up';

function UnAuthorizedApp(): JSX.Element {
  const [isNewUser, setNewUser] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  return isNewUser ? (
    <SignUpPage user={user} />
  ) : (
    <SignInPage setNewUser={setNewUser} setUser={setUser} />
  );
}

export default UnAuthorizedApp;

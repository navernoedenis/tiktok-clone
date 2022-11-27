import React from 'react';
import { useAuth } from 'context/auth';

import AuthorizedApp from 'app/authorized-app';
import UnAuthorizedApp from 'app/unauthorized-app';

function App(): JSX.Element {
  const { user } = useAuth();

  return user ? <AuthorizedApp /> : <UnAuthorizedApp />;
}

export default App;

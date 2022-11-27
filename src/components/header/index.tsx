import React from 'react';
import { useAuth } from 'context/auth';

import Logo from './logo';
import SearchBox from './search-box';
import UserPanel from './user-panel';

import { HeaderContainer, HeaderWrapper, LogoLink } from './styles';

function Header(): JSX.Element | null {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <SearchBox />
        <UserPanel user={user} />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;

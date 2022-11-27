import React from 'react';

import NavigationLinks from './sidebar-links';
import SuggestedAccounts from './sidebar-suggested';

import { SidebarContainer } from './styles';

function Sidebar(): JSX.Element {
  return (
    <SidebarContainer>
      <NavigationLinks />
      <SuggestedAccounts />
    </SidebarContainer>
  );
}

export default Sidebar;

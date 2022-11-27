import React, { ReactNode } from 'react';

import FollowingIcon from 'components/sidebar/icons/following';
import ForYouIcon from 'components/sidebar/icons/for-you';
import LiveIcon from 'components/sidebar/icons/live';

import {
  SidebarLinkContainer,
  SidebarLinksContainer,
  SidebarLinkText,
} from './styles';

function SidebarLinks(): JSX.Element {
  return (
    <SidebarLinksContainer>
      <SidebarLink href="/" icon={<ForYouIcon />}>
        For You
      </SidebarLink>
      <SidebarLink href="/following" icon={<FollowingIcon />}>
        Following
      </SidebarLink>
      <SidebarLink href="/live" icon={<LiveIcon />}>
        LIVE
      </SidebarLink>
    </SidebarLinksContainer>
  );
}

export default SidebarLinks;

interface SidebarLinkProps {
  children: ReactNode;
  href: string;
  icon: JSX.Element;
}

function SidebarLink({ children, href, icon }: SidebarLinkProps): JSX.Element {
  return (
    <SidebarLinkContainer to={href}>
      {icon}
      <SidebarLinkText>{children}</SidebarLinkText>
    </SidebarLinkContainer>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'types/user';

import AuthService from 'services/auth';
import StorageService from 'services/storage';

import InboxIcon from './icons/inbox';
import MessageIcon from './icons/message';
import UploadIcon from './icons/upload';

import BusinessSuite from './icons/business-suite';
import FeedbackIcon from './icons/feedback';
import GetCoinsIcon from './icons/get-coins';
import LanguageIcon from './icons/language';
import LogoutIcon from './icons/logout';
import SettingsIcon from './icons/settings';
import ViewProfileIcon from './icons/view-profile';

import DropdownMenuItem from './dropdown-menu-item';

import {
  Dropdown,
  DropdownAvatar,
  DropdownAvatarSkeleton,
  DropdownMenu,
  LinkIcon,
  UserPanelContainer,
} from './styles';

interface UserPanelProps {
  user: User;
}

function UserPanel({ user }: UserPanelProps): JSX.Element {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const node = event.target as HTMLElement;

      if (avatarRef.current && !avatarRef.current.contains(node)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [avatarRef]);

  const logOut = async (): Promise<void> => {
    await AuthService.logoutWithGoogle();
    StorageService.destroy('isLoggedIn');
    window.location.reload();
  };

  return (
    <UserPanelContainer>
      <LinkIcon to="/upload">
        <UploadIcon />
      </LinkIcon>

      <LinkIcon to="/messages">
        <MessageIcon />
      </LinkIcon>

      <LinkIcon to="/inbox">
        <InboxIcon />
      </LinkIcon>

      <Dropdown>
        {!isAvatarLoaded && <DropdownAvatarSkeleton variant="circular" />}
        <DropdownAvatar
          onClick={() => setMenuVisible(true)}
          onLoad={() => setAvatarLoaded(true)}
          ref={avatarRef}
          src={user.photoURL}
          sx={{ display: isAvatarLoaded ? 'block' : 'none' }}
        />
        {isMenuVisible && (
          <DropdownMenu>
            <DropdownMenuItem
              icon={<ViewProfileIcon />}
              onClick={() => navigate(`/${user.username}`)}
              text="View profile"
            />
            <DropdownMenuItem icon={<GetCoinsIcon />} text="Get coins" />
            <DropdownMenuItem icon={<BusinessSuite />} text="Business suite" />
            <DropdownMenuItem icon={<SettingsIcon />} text="Settings" />
            <DropdownMenuItem icon={<LanguageIcon />} text="English" />
            <DropdownMenuItem
              icon={<FeedbackIcon />}
              text="Feedback and help"
            />
            <DropdownMenuItem
              icon={<LogoutIcon />}
              onClick={logOut}
              text="Log out"
            />
          </DropdownMenu>
        )}
      </Dropdown>
    </UserPanelContainer>
  );
}

export default UserPanel;

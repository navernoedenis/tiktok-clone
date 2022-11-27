import React from 'react';
import { DropdownMenuItemContainer, IconContainer, Text } from './styles';

interface UserPanelProps {
  icon?: JSX.Element | null;
  onClick?: () => void;
  text: string;
}

function UserPanel({ icon, onClick, text }: UserPanelProps): JSX.Element {
  return (
    <DropdownMenuItemContainer onClick={onClick}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Text>{text}</Text>
    </DropdownMenuItemContainer>
  );
}

UserPanel.defaultProps = {
  icon: null,
  onClick: () => {},
};

export default UserPanel;
